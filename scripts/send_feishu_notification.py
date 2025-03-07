#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import os
import requests
from bs4 import BeautifulSoup

def parse_report(html_path):
    """Parse test report from HTML file"""
    if not os.path.exists(html_path):
        return None

    with open(html_path, 'r') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Get test summary
    summary = soup.find('p', text=lambda text: text and 'tests ran in' in text).text.strip()
    total_count = int(summary.split()[0])

    # Get failed test cases
    failed_tests = []
    for row in soup.find_all('tr'):
        result = row.find('td', class_='col-result')
        if result and result.text == 'Failed':
            test_name = row.find('td', class_='col-name').text.strip()
            failed_tests.append(test_name)

    # Build report
    report = {
        'summary': summary,
        'total_count': total_count,
        'failed_count': len(failed_tests),
        'failed_tests': failed_tests
    }

    return report

def format_test_report(report):
    """Format test report for Feishu message"""
    if report is None:
        return None

    # Extract test module and case names
    grouped_failures = {}
    for test in report['failed_tests']:
        module_path, test_class, test_name = test.split('::')
        module = module_path.split('/')[-1].replace('.py', '')
        if module not in grouped_failures:
            grouped_failures[module] = []
        grouped_failures[module].append(f"{test_class}::{test_name}")

    # Build failed test cases list
    failed_tests_str = ''
    for module, tests in grouped_failures.items():
        failed_tests_str += f"<br>Module: {module}<br>"
        for test in tests:
            failed_tests_str += f"  - {test}<br>"

    message = f"""Test Summary: {report['summary']}<br>Test Result: {'❌ ' if report['failed_count'] > 0 else '✅ '}Total {report['total_count']} tests, {report['failed_count']} failed<br><br>Failed Test Cases:{failed_tests_str}"""
    print(f"Test Report:\n{message}")
    return message

def get_error_info():
    """Get error information from log files"""
    error_info = []
    log_files = {
        'server.log': 'Server Error',
        'example/prepare_data.py.log': 'Data Preparation Error',
        'backup_commands.log': 'Backup Command Error',
        'restore_commands.log': 'Restore Command Error',
        'example/verify_data.py.log': 'Data Verification Error'
    }

    for log_file, error_type in log_files.items():
        if os.path.exists(log_file):
            with open(log_file, 'r') as f:
                lines = f.readlines()
                if lines:
                    error_info.append(f"{error_type}:")
                    error_info.extend(line.strip() for line in lines[-10:])  # Get last 10 lines

    return '<br>'.join(error_info) if error_info else None



def send_feishu_message(webhook_url, job_status, job_info, test_report=None, error_info=None):
    """Send Feishu notification"""
    content = test_report if test_report else (
        "✅ All API tests passed successfully" if job_status == "success"
        else (error_info or "❌ Test execution failed")
    )

    message = {
        "msg_type": "interactive",
        "card": {
            "config": {
                "wide_screen_mode": True
            },
            "header": {
                "template": "green" if job_status == "success" else "red",
                "title": {
                    "content": f"{'✅' if job_status == 'success' else '❌'} Nightly Test - {job_status}",
                    "tag": "plain_text"
                }
            },
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "content": f"**Job Info**<br>{job_info.replace('\n', '<br>')}",
                        "tag": "lark_md"
                    }
                },
                {
                    "tag": "div",
                    "text": {
                        "content": "---",
                        "tag": "lark_md"
                    }
                },
                {
                    "tag": "div",
                    "text": {
                        "content": content.replace('\n', '<br>') if content else content,
                        "tag": "lark_md"
                    }
                },
                {
                    "tag": "action",
                    "actions": [
                        {
                            "tag": "button",
                            "text": {
                                "content": "View Detailed Report",
                                "tag": "plain_text"
                            },
                            "url": f"{os.environ.get('GITHUB_SERVER_URL', '')}/{os.environ.get('GITHUB_REPOSITORY', '')}/actions/runs/{os.environ.get('GITHUB_RUN_ID', '')}",
                            "type": "default"
                        }
                    ]
                }
            ]
        }
    }

    response = requests.post(webhook_url, json=message)
    print(f"Feishu message status: {response.status_code}, content: {response.text}")

    # 解析响应JSON
    try:
        result = response.json()
        if result.get('code') != 0:
            print(f"Failed to send Feishu message: {result.get('msg')}")
            sys.exit(1)
    except ValueError as e:
        print(f"Failed to parse Feishu response: {e}")
        sys.exit(1)

def main():
    if len(sys.argv) < 4:
        print("Usage: python send_feishu_notification.py <webhook_url> <job_status> <job_info> [report_path]")
        sys.exit(1)

    webhook_url = sys.argv[1]
    job_status = sys.argv[2]
    job_info = sys.argv[3]
    report_path = sys.argv[4] if len(sys.argv) > 4 else None

    # 只在非成功状态下发送通知
    if job_status == "success":
        print("Job succeeded, skipping notification")
        return

    test_report = None
    if report_path:
        try:
            report = parse_report(report_path)
            if report:
                test_report = format_test_report(report)
        except Exception as e:
            print(f"Error parsing test report: {e}")

    error_info = get_error_info()

    send_feishu_message(webhook_url, job_status, job_info, test_report, error_info)

if __name__ == '__main__':
    main()
