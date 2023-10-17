window.BENCHMARK_DATA = {
  "lastUpdate": 1697512860903,
  "repoUrl": "https://github.com/zhuwenxing/milvus-backup",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "wenxing.zhu@zilliz.com",
            "name": "zhuwenxing",
            "username": "zhuwenxing"
          },
          "committer": {
            "email": "wenxing.zhu@zilliz.com",
            "name": "zhuwenxing",
            "username": "zhuwenxing"
          },
          "distinct": true,
          "id": "d9eb1ecf7d0c622d2284a5c1ce5e138e2dae51e4",
          "message": "auto push\n\nSigned-off-by: zhuwenxing <wenxing.zhu@zilliz.com>",
          "timestamp": "2023-10-17T11:15:00+08:00",
          "tree_id": "74478b79642d719433a0f2e3508194deb876859f",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/d9eb1ecf7d0c622d2284a5c1ce5e138e2dae51e4"
        },
        "date": 1697512859910,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[10000]",
            "value": 1.9145631648039725,
            "unit": "iter/sec",
            "range": "stddev: 0.013627883774585967",
            "extra": "mean: 522.3123574000169 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[10000]",
            "value": 0.039909463773875754,
            "unit": "iter/sec",
            "range": "stddev: 0.006503590342977057",
            "extra": "mean: 25.056713507000005 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}