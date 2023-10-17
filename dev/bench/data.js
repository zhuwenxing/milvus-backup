window.BENCHMARK_DATA = {
  "lastUpdate": 1697523643040,
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
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wenxing.zhu@zilliz.com"
          },
          "committer": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wenxing.zhu@zilliz.com"
          },
          "id": "d9eb1ecf7d0c622d2284a5c1ce5e138e2dae51e4",
          "message": "auto push\n\nSigned-off-by: zhuwenxing <wenxing.zhu@zilliz.com>",
          "timestamp": "2023-10-17T03:15:00Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/d9eb1ecf7d0c622d2284a5c1ce5e138e2dae51e4"
        },
        "date": 1697516748260,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[10000]",
            "value": 1.8107188253156516,
            "unit": "iter/sec",
            "range": "stddev: 0.010932425099749383",
            "extra": "mean: 552.2668600000202 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[10000]",
            "value": 0.03990794955400063,
            "unit": "iter/sec",
            "range": "stddev: 0.006888980540100471",
            "extra": "mean: 25.057664229200007 sec\nrounds: 5"
          }
        ]
      }
    ],
    "Milvus backup restore performance test": [
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing"
          },
          "committer": {
            "name": "zhuwenxing",
            "username": "zhuwenxing"
          },
          "id": "5ef10ba6cc827e26b59183a3a044523d59840f7d",
          "message": "update",
          "timestamp": "2023-10-13T10:16:18Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/pull/10/commits/5ef10ba6cc827e26b59183a3a044523d59840f7d"
        },
        "date": 1697523642244,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.560807270859834,
            "unit": "iter/sec",
            "range": "stddev: 0.06667942573465185",
            "extra": "mean: 640.6940938000048 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03327077519371293,
            "unit": "iter/sec",
            "range": "stddev: 0.010806434070077088",
            "extra": "mean: 30.05640818940001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}