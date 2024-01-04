window.BENCHMARK_DATA = {
  "lastUpdate": 1704342415246,
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
      },
      {
        "commit": {
          "author": {
            "email": "wxzhuyeah@gmail.com",
            "name": "zhuwenxing",
            "username": "zhuwenxing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T02:04:33-05:00",
          "tree_id": "f9b873b8b02d65e12623d7577dd4a93e0ff2356a",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1697526700903,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.0217464728604122,
            "unit": "iter/sec",
            "range": "stddev: 0.0851503368502414",
            "extra": "mean: 978.7163710000073 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033235785645724006,
            "unit": "iter/sec",
            "range": "stddev: 0.0033175489331248383",
            "extra": "mean: 30.088050592800005 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "071118118119d1342f6f6d4a19eed86d982413f5",
          "message": "update",
          "timestamp": "2023-10-13T10:16:18Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/pull/11/commits/071118118119d1342f6f6d4a19eed86d982413f5"
        },
        "date": 1697530658169,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.6296334868634343,
            "unit": "iter/sec",
            "range": "stddev: 0.020386851312839648",
            "extra": "mean: 613.6349112000062 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033266299131618146,
            "unit": "iter/sec",
            "range": "stddev: 0.012796523329042743",
            "extra": "mean: 30.06045235280002 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "071118118119d1342f6f6d4a19eed86d982413f5",
          "message": "update",
          "timestamp": "2023-10-13T10:16:18Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/pull/11/commits/071118118119d1342f6f6d4a19eed86d982413f5"
        },
        "date": 1697530658169,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.6296334868634343,
            "unit": "iter/sec",
            "range": "stddev: 0.020386851312839648",
            "extra": "mean: 613.6349112000062 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033266299131618146,
            "unit": "iter/sec",
            "range": "stddev: 0.012796523329042743",
            "extra": "mean: 30.06045235280002 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "5860c420119a2e63cc18ed031c898631cff00622",
          "message": "update",
          "timestamp": "2023-10-13T10:16:18Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/pull/11/commits/5860c420119a2e63cc18ed031c898631cff00622"
        },
        "date": 1697532079895,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.1091231490947229,
            "unit": "iter/sec",
            "range": "stddev: 0.270089421624091",
            "extra": "mean: 901.6131353999867 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03324943058107954,
            "unit": "iter/sec",
            "range": "stddev: 0.006218275363670574",
            "extra": "mean: 30.0757030278 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "5860c420119a2e63cc18ed031c898631cff00622",
          "message": "update",
          "timestamp": "2023-10-13T10:16:18Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/pull/11/commits/5860c420119a2e63cc18ed031c898631cff00622"
        },
        "date": 1697532079895,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.1091231490947229,
            "unit": "iter/sec",
            "range": "stddev: 0.270089421624091",
            "extra": "mean: 901.6131353999867 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03324943058107954,
            "unit": "iter/sec",
            "range": "stddev: 0.006218275363670574",
            "extra": "mean: 30.0757030278 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1697603222226,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.173054065234161,
            "unit": "iter/sec",
            "range": "stddev: 0.040874877348354766",
            "extra": "mean: 852.475627199999 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03324419966470378,
            "unit": "iter/sec",
            "range": "stddev: 0.014416531537199148",
            "extra": "mean: 30.08043538679999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1697689573835,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.3703190111894035,
            "unit": "iter/sec",
            "range": "stddev: 0.2515882769806177",
            "extra": "mean: 729.7570797999981 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.0332739811292529,
            "unit": "iter/sec",
            "range": "stddev: 0.009485024975531083",
            "extra": "mean: 30.053512265800002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1697776016388,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.2013763227611995,
            "unit": "iter/sec",
            "range": "stddev: 0.15143368333127555",
            "extra": "mean: 832.378648599996 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03322649236449369,
            "unit": "iter/sec",
            "range": "stddev: 0.00573503443169425",
            "extra": "mean: 30.096466067799998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1697862344120,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.5368515342129256,
            "unit": "iter/sec",
            "range": "stddev: 0.030820206715682145",
            "extra": "mean: 650.6809394000015 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033262896159494244,
            "unit": "iter/sec",
            "range": "stddev: 0.009818506736372738",
            "extra": "mean: 30.063527697799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1697948723521,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.5594656579999435,
            "unit": "iter/sec",
            "range": "stddev: 0.017573967948694993",
            "extra": "mean: 641.2452848000044 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03326469894086733,
            "unit": "iter/sec",
            "range": "stddev: 0.0070917721571088395",
            "extra": "mean: 30.061898403999997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698035246067,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 0.9797544074395085,
            "unit": "iter/sec",
            "range": "stddev: 0.07175030325125055",
            "extra": "mean: 1.0206639463999978 sec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03322827072800292,
            "unit": "iter/sec",
            "range": "stddev: 0.00907795216274029",
            "extra": "mean: 30.094855317200008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698121555170,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.2253682310938498,
            "unit": "iter/sec",
            "range": "stddev: 0.04197116732828809",
            "extra": "mean: 816.0812191999867 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03324144039721275,
            "unit": "iter/sec",
            "range": "stddev: 0.008227327962186162",
            "extra": "mean: 30.0829322692 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698208017677,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.0886861806654677,
            "unit": "iter/sec",
            "range": "stddev: 0.0359238311561987",
            "extra": "mean: 918.5383426000158 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033243251092873294,
            "unit": "iter/sec",
            "range": "stddev: 0.014583269414439068",
            "extra": "mean: 30.08129371 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698294368952,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.569683832687613,
            "unit": "iter/sec",
            "range": "stddev: 0.058241643213424885",
            "extra": "mean: 637.0709688000034 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03326599105997735,
            "unit": "iter/sec",
            "range": "stddev: 0.002763661742264771",
            "extra": "mean: 30.06073073839998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698380781861,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.6054954258897802,
            "unit": "iter/sec",
            "range": "stddev: 0.08409456913361958",
            "extra": "mean: 622.8606969999873 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03327620334118484,
            "unit": "iter/sec",
            "range": "stddev: 0.006510144123040305",
            "extra": "mean: 30.051505267799996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698467164465,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.2841526642026713,
            "unit": "iter/sec",
            "range": "stddev: 0.07902826978253062",
            "extra": "mean: 778.723611199996 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03325818587876993,
            "unit": "iter/sec",
            "range": "stddev: 0.01284045072904684",
            "extra": "mean: 30.06778552640002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698553562082,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.0595421939708778,
            "unit": "iter/sec",
            "range": "stddev: 0.04913923146973169",
            "extra": "mean: 943.8038482000138 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033230961789636616,
            "unit": "iter/sec",
            "range": "stddev: 0.009516919703240588",
            "extra": "mean: 30.0924182192 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698639997522,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.5035075083093128,
            "unit": "iter/sec",
            "range": "stddev: 0.07065313940531195",
            "extra": "mean: 665.1114108000002 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033263569575239814,
            "unit": "iter/sec",
            "range": "stddev: 0.01525437923708031",
            "extra": "mean: 30.062919066400003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698726415094,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.1048736204992997,
            "unit": "iter/sec",
            "range": "stddev: 0.03063593264673986",
            "extra": "mean: 905.0808901999972 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03323760372810219,
            "unit": "iter/sec",
            "range": "stddev: 0.007658252431313453",
            "extra": "mean: 30.08640478959999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698812831866,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.0061031782275773,
            "unit": "iter/sec",
            "range": "stddev: 0.027236951843866198",
            "extra": "mean: 993.9338445999852 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03323810076900701,
            "unit": "iter/sec",
            "range": "stddev: 0.008649715528308987",
            "extra": "mean: 30.085954878999996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698899230651,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.2251780726554695,
            "unit": "iter/sec",
            "range": "stddev: 0.022440292365847866",
            "extra": "mean: 816.2078822000012 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033247431327496864,
            "unit": "iter/sec",
            "range": "stddev: 0.006558120052589879",
            "extra": "mean: 30.07751155719999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1698985603617,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.4953863140643253,
            "unit": "iter/sec",
            "range": "stddev: 0.15535423249409078",
            "extra": "mean: 668.7235202000011 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03326765121840245,
            "unit": "iter/sec",
            "range": "stddev: 0.015504055963924004",
            "extra": "mean: 30.059230615200043 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699072007635,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.226713539162005,
            "unit": "iter/sec",
            "range": "stddev: 0.024152680183479002",
            "extra": "mean: 815.1862420000043 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03324601257690761,
            "unit": "iter/sec",
            "range": "stddev: 0.010360728905645211",
            "extra": "mean: 30.078795094199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699158303161,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.49243892605789,
            "unit": "iter/sec",
            "range": "stddev: 0.00947126328739187",
            "extra": "mean: 401.21344180000733 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03993784224463232,
            "unit": "iter/sec",
            "range": "stddev: 0.007572218468286941",
            "extra": "mean: 25.0389090596 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699244794149,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.405307565528596,
            "unit": "iter/sec",
            "range": "stddev: 0.007960760970634",
            "extra": "mean: 415.7472476000123 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.0344283382490731,
            "unit": "iter/sec",
            "range": "stddev: 2.234260934575807",
            "extra": "mean: 29.04583987659999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699331176726,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.5788682001469914,
            "unit": "iter/sec",
            "range": "stddev: 0.01870611674101752",
            "extra": "mean: 633.3650901999931 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03440155424537781,
            "unit": "iter/sec",
            "range": "stddev: 2.243657036032567",
            "extra": "mean: 29.068454083999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699417518784,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.478828289160406,
            "unit": "iter/sec",
            "range": "stddev: 0.005693492069369778",
            "extra": "mean: 403.4164062000059 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992472839274088,
            "unit": "iter/sec",
            "range": "stddev: 0.008209076472838566",
            "extra": "mean: 25.047133449800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699504026647,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.083805100182013,
            "unit": "iter/sec",
            "range": "stddev: 0.06113939773183043",
            "extra": "mean: 922.6751191999938 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.0332405285207119,
            "unit": "iter/sec",
            "range": "stddev: 0.015036849480581673",
            "extra": "mean: 30.083757524400017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699590360030,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.372999577966731,
            "unit": "iter/sec",
            "range": "stddev: 0.004162374065947658",
            "extra": "mean: 421.4075760000071 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03442112071223387,
            "unit": "iter/sec",
            "range": "stddev: 2.23659123410744",
            "extra": "mean: 29.051930306400003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699676769827,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.2482688467756244,
            "unit": "iter/sec",
            "range": "stddev: 0.06794238613915769",
            "extra": "mean: 801.1094746000254 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033236322250149025,
            "unit": "iter/sec",
            "range": "stddev: 0.020620438695565697",
            "extra": "mean: 30.087564817600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699763122934,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.465290254029685,
            "unit": "iter/sec",
            "range": "stddev: 0.006388657180586453",
            "extra": "mean: 405.63174999999774 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03565090540732789,
            "unit": "iter/sec",
            "range": "stddev: 2.739548957252035",
            "extra": "mean: 28.049778500000013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699849641029,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 1.5937095351372017,
            "unit": "iter/sec",
            "range": "stddev: 0.012561845615740891",
            "extra": "mean: 627.4669115999927 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.033263745079449195,
            "unit": "iter/sec",
            "range": "stddev: 0.0065596402670102414",
            "extra": "mean: 30.062760450199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1699935940099,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4511176859870534,
            "unit": "iter/sec",
            "range": "stddev: 0.004191790582544571",
            "extra": "mean: 407.9771467999933 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.036970094449302736,
            "unit": "iter/sec",
            "range": "stddev: 2.737857215922678",
            "extra": "mean: 27.048889511799995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700022353979,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.453307082136321,
            "unit": "iter/sec",
            "range": "stddev: 0.0064777454392250565",
            "extra": "mean: 407.6130572000011 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039922643945489486,
            "unit": "iter/sec",
            "range": "stddev: 0.00649366564629089",
            "extra": "mean: 25.0484412146 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700108808195,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 12.103912974046464,
            "unit": "iter/sec",
            "range": "stddev: 0.002014961468445285",
            "extra": "mean: 82.61791060000405 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039927773492942596,
            "unit": "iter/sec",
            "range": "stddev: 0.007433345924696169",
            "extra": "mean: 25.045223224800008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700195206601,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 12.02414014471918,
            "unit": "iter/sec",
            "range": "stddev: 0.0022825242321951665",
            "extra": "mean: 83.16603000000669 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039927547542183,
            "unit": "iter/sec",
            "range": "stddev: 0.0070947413528948755",
            "extra": "mean: 25.04536495620001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700281546066,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 11.899601869070562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005966789394567247",
            "extra": "mean: 84.03642499999933 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992639109051908,
            "unit": "iter/sec",
            "range": "stddev: 0.003956007509574834",
            "extra": "mean: 25.046090385000014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700367941017,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 11.677838890167235,
            "unit": "iter/sec",
            "range": "stddev: 0.004864567999588467",
            "extra": "mean: 85.63228259999391 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039923802607934954,
            "unit": "iter/sec",
            "range": "stddev: 0.004347151377009322",
            "extra": "mean: 25.047714262600017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700454414497,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 12.12693415261938,
            "unit": "iter/sec",
            "range": "stddev: 0.0022144012058930283",
            "extra": "mean: 82.46107280000388 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039924834244075245,
            "unit": "iter/sec",
            "range": "stddev: 0.004343436366840765",
            "extra": "mean: 25.047067043200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700540815888,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.484011278865813,
            "unit": "iter/sec",
            "range": "stddev: 0.003085435198699072",
            "extra": "mean: 402.5746616000049 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992166888355273,
            "unit": "iter/sec",
            "range": "stddev: 0.003186175645540928",
            "extra": "mean: 25.04905300720002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700627220487,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4120125988314074,
            "unit": "iter/sec",
            "range": "stddev: 0.0035308717728394995",
            "extra": "mean: 414.59153259999084 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.0383961384435673,
            "unit": "iter/sec",
            "range": "stddev: 2.231913363810317",
            "extra": "mean: 26.044285715600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700713584336,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4128112824476053,
            "unit": "iter/sec",
            "range": "stddev: 0.02695613537198409",
            "extra": "mean: 414.45429540000305 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039922774448330485,
            "unit": "iter/sec",
            "range": "stddev: 0.0031460182602234717",
            "extra": "mean: 25.048359334199993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700799961060,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4866737697972283,
            "unit": "iter/sec",
            "range": "stddev: 0.006358414651066844",
            "extra": "mean: 402.14362340000207 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03697342448150939,
            "unit": "iter/sec",
            "range": "stddev: 2.737424881027905",
            "extra": "mean: 27.0464533384 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700886361699,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4514550299014224,
            "unit": "iter/sec",
            "range": "stddev: 0.004609545567139092",
            "extra": "mean: 407.92100520000645 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03839505716812122,
            "unit": "iter/sec",
            "range": "stddev: 2.2380296087224547",
            "extra": "mean: 26.045019170599993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1700972742011,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4541927512159107,
            "unit": "iter/sec",
            "range": "stddev: 0.008478385295315418",
            "extra": "mean: 407.46595779999666 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03565322461184903,
            "unit": "iter/sec",
            "range": "stddev: 2.7393500858793502",
            "extra": "mean: 28.047953891600002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701059212529,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4505290455488815,
            "unit": "iter/sec",
            "range": "stddev: 0.005949808964562941",
            "extra": "mean: 408.0751467999903 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039930318533579846,
            "unit": "iter/sec",
            "range": "stddev: 0.006725968635847485",
            "extra": "mean: 25.043626916200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701145603389,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4855759096980226,
            "unit": "iter/sec",
            "range": "stddev: 0.0077753699134102345",
            "extra": "mean: 402.32124720000684 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992907261698639,
            "unit": "iter/sec",
            "range": "stddev: 0.006446910200122337",
            "extra": "mean: 25.04440835859999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701232019588,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.421995084067861,
            "unit": "iter/sec",
            "range": "stddev: 0.005896813453577454",
            "extra": "mean: 412.8827537999996 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.034429369136636745,
            "unit": "iter/sec",
            "range": "stddev: 2.232599029520728",
            "extra": "mean: 29.044970183199986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701318415956,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4339783103412667,
            "unit": "iter/sec",
            "range": "stddev: 0.018049396320759057",
            "extra": "mean: 410.85000459999605 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992536539586591,
            "unit": "iter/sec",
            "range": "stddev: 0.007362548714719492",
            "extra": "mean: 25.046733826600008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701404849843,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4820216585449293,
            "unit": "iter/sec",
            "range": "stddev: 0.0031216607052911003",
            "extra": "mean: 402.8973705999988 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992728905178616,
            "unit": "iter/sec",
            "range": "stddev: 0.007086123448512097",
            "extra": "mean: 25.045527100599998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701491145415,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.428525708938285,
            "unit": "iter/sec",
            "range": "stddev: 0.011718426038201257",
            "extra": "mean: 411.77245779999794 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039922682279068505,
            "unit": "iter/sec",
            "range": "stddev: 0.006631250836197693",
            "extra": "mean: 25.048417163199996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701577547754,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.475492067829549,
            "unit": "iter/sec",
            "range": "stddev: 0.006454291827921781",
            "extra": "mean: 403.96009059999756 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.036966448203574656,
            "unit": "iter/sec",
            "range": "stddev: 2.740957145177554",
            "extra": "mean: 27.051557523000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701664004805,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4768047421656276,
            "unit": "iter/sec",
            "range": "stddev: 0.008105732541767012",
            "extra": "mean: 403.7459970000043 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039924531266995855,
            "unit": "iter/sec",
            "range": "stddev: 0.0036941906297813013",
            "extra": "mean: 25.047257119 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701750422524,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4712758126068817,
            "unit": "iter/sec",
            "range": "stddev: 0.008872000077190018",
            "extra": "mean: 404.6492887999932 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03838928088430572,
            "unit": "iter/sec",
            "range": "stddev: 2.2407857691889386",
            "extra": "mean: 26.048938061999998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701836858360,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4939767879305883,
            "unit": "iter/sec",
            "range": "stddev: 0.007301476979731567",
            "extra": "mean: 400.96604139999386 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.036966645935456434,
            "unit": "iter/sec",
            "range": "stddev: 2.7408232150636995",
            "extra": "mean: 27.051412826199993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1701923238202,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.436796700417404,
            "unit": "iter/sec",
            "range": "stddev: 0.0034388967589032357",
            "extra": "mean: 410.3748170000017 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03839038689321642,
            "unit": "iter/sec",
            "range": "stddev: 2.2297818188536542",
            "extra": "mean: 26.048187604399992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702009603250,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.450389672874618,
            "unit": "iter/sec",
            "range": "stddev: 0.00638669680624987",
            "extra": "mean: 408.09835720000933 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03991883340042603,
            "unit": "iter/sec",
            "range": "stddev: 0.003975738803152423",
            "extra": "mean: 25.050832271799994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702095958114,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4597816052892374,
            "unit": "iter/sec",
            "range": "stddev: 0.011610834412117157",
            "extra": "mean: 406.5401570000006 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039934493506928376,
            "unit": "iter/sec",
            "range": "stddev: 0.005447824991996849",
            "extra": "mean: 25.04100871660001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702182367465,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.420278513801659,
            "unit": "iter/sec",
            "range": "stddev: 0.011470580401771959",
            "extra": "mean: 413.17558880000433 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.0399292786907317,
            "unit": "iter/sec",
            "range": "stddev: 0.00934773203784743",
            "extra": "mean: 25.04427910520001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702268872289,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4517521917284437,
            "unit": "iter/sec",
            "range": "stddev: 0.006287270149933429",
            "extra": "mean: 407.871563599997 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03565489716894309,
            "unit": "iter/sec",
            "range": "stddev: 2.742673057228087",
            "extra": "mean: 28.046638173200005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702355207212,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.447645444043867,
            "unit": "iter/sec",
            "range": "stddev: 0.01475704105584265",
            "extra": "mean: 408.5559052000008 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992088061508875,
            "unit": "iter/sec",
            "range": "stddev: 0.004281701233663496",
            "extra": "mean: 25.049547619999988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702441642516,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4423275190755924,
            "unit": "iter/sec",
            "range": "stddev: 0.007874409712915932",
            "extra": "mean: 409.44549499998857 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03327396022324778,
            "unit": "iter/sec",
            "range": "stddev: 0.00523378973135647",
            "extra": "mean: 30.05353114840001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702528039808,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.459834619926547,
            "unit": "iter/sec",
            "range": "stddev: 0.010140622689637429",
            "extra": "mean: 406.5313951999997 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03327888978757745,
            "unit": "iter/sec",
            "range": "stddev: 0.010152733621132016",
            "extra": "mean: 30.049079352799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702614431385,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4951086600933032,
            "unit": "iter/sec",
            "range": "stddev: 0.0054133764846552865",
            "extra": "mean: 400.7841486000075 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03443389426192332,
            "unit": "iter/sec",
            "range": "stddev: 2.2390932752539783",
            "extra": "mean: 29.0411532426 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702700759169,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.3887470936311623,
            "unit": "iter/sec",
            "range": "stddev: 0.007570160952130532",
            "extra": "mean: 418.62949939999226 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.038391920363183236,
            "unit": "iter/sec",
            "range": "stddev: 2.2369677435146818",
            "extra": "mean: 26.047147174200006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702787181972,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.474385072935569,
            "unit": "iter/sec",
            "range": "stddev: 0.00224018509894825",
            "extra": "mean: 404.14081499999384 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.036972607414251284,
            "unit": "iter/sec",
            "range": "stddev: 2.735057925767576",
            "extra": "mean: 27.047051045 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702873652405,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4660081138404,
            "unit": "iter/sec",
            "range": "stddev: 0.013184909950458129",
            "extra": "mean: 405.51366980000125 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.036976837354672866,
            "unit": "iter/sec",
            "range": "stddev: 2.742647257625767",
            "extra": "mean: 27.043957015799982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1702960032247,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.409335827846527,
            "unit": "iter/sec",
            "range": "stddev: 0.006146585722359922",
            "extra": "mean: 415.05214360000764 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992485095900527,
            "unit": "iter/sec",
            "range": "stddev: 0.0076199593051097135",
            "extra": "mean: 25.047056556999983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703046217107,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4536780969600773,
            "unit": "iter/sec",
            "range": "stddev: 0.003401883876418148",
            "extra": "mean: 407.55142299999534 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03565728170118277,
            "unit": "iter/sec",
            "range": "stddev: 2.7409463770198945",
            "extra": "mean: 28.044762592400012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703132803857,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4206061597417214,
            "unit": "iter/sec",
            "range": "stddev: 0.007014047470171414",
            "extra": "mean: 413.1196626000076 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992404493122655,
            "unit": "iter/sec",
            "range": "stddev: 0.00322169815106211",
            "extra": "mean: 25.047562232799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703219186102,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.480686320211944,
            "unit": "iter/sec",
            "range": "stddev: 0.006713660594171193",
            "extra": "mean: 403.11424780000493 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039931089605095345,
            "unit": "iter/sec",
            "range": "stddev: 0.007174397471743925",
            "extra": "mean: 25.04314332240001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703305613780,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.370493916439547,
            "unit": "iter/sec",
            "range": "stddev: 0.011803596864210663",
            "extra": "mean: 421.8530126000019 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03565552460341509,
            "unit": "iter/sec",
            "range": "stddev: 2.7390862165994845",
            "extra": "mean: 28.04614463319998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703391946637,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4225402317809004,
            "unit": "iter/sec",
            "range": "stddev: 0.012035506766491474",
            "extra": "mean: 412.7898422000044 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992278941183011,
            "unit": "iter/sec",
            "range": "stddev: 0.005573003902505793",
            "extra": "mean: 25.04834994580001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703478438342,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.5007168167215554,
            "unit": "iter/sec",
            "range": "stddev: 0.005937946924909958",
            "extra": "mean: 399.88534220000247 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03839504612268022,
            "unit": "iter/sec",
            "range": "stddev: 2.2414354422697658",
            "extra": "mean: 26.045026663199998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703564796111,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4448875621686796,
            "unit": "iter/sec",
            "range": "stddev: 0.004883061566810399",
            "extra": "mean: 409.0167643999848 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03838566364117451,
            "unit": "iter/sec",
            "range": "stddev: 2.237006889503164",
            "extra": "mean: 26.051392763399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703651153518,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4551363133197426,
            "unit": "iter/sec",
            "range": "stddev: 0.007351850247460244",
            "extra": "mean: 407.3093598000014 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039930837103270986,
            "unit": "iter/sec",
            "range": "stddev: 0.0049034721504755945",
            "extra": "mean: 25.04330168219999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703737580097,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.5105378041848496,
            "unit": "iter/sec",
            "range": "stddev: 0.009798538203493636",
            "extra": "mean: 398.32102840000516 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039924227003420215,
            "unit": "iter/sec",
            "range": "stddev: 0.005141389479350027",
            "extra": "mean: 25.047448004800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703823994582,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.387232572580809,
            "unit": "iter/sec",
            "range": "stddev: 0.020320446512253308",
            "extra": "mean: 418.8950885999816 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.038386705616976956,
            "unit": "iter/sec",
            "range": "stddev: 2.237817108432976",
            "extra": "mean: 26.050685619599996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703910405745,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4837364428556055,
            "unit": "iter/sec",
            "range": "stddev: 0.007130407761483903",
            "extra": "mean: 402.6192081999966 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.036974325347774006,
            "unit": "iter/sec",
            "range": "stddev: 2.7369544199360143",
            "extra": "mean: 27.045794361199988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1703996752970,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.458773851928338,
            "unit": "iter/sec",
            "range": "stddev: 0.005218536890653498",
            "extra": "mean: 406.70678159999625 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.039932981867158504,
            "unit": "iter/sec",
            "range": "stddev: 0.005521296410160206",
            "extra": "mean: 25.041956629400005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1704083213052,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.4513107014675057,
            "unit": "iter/sec",
            "range": "stddev: 0.007589361492028567",
            "extra": "mean: 407.9450227999814 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992666754319581,
            "unit": "iter/sec",
            "range": "stddev: 0.008091172408725294",
            "extra": "mean: 25.045916965600032 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1704169605540,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.390655537217914,
            "unit": "iter/sec",
            "range": "stddev: 0.022609565770313835",
            "extra": "mean: 418.29531039998074 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.0369668819872127,
            "unit": "iter/sec",
            "range": "stddev: 2.742380869897021",
            "extra": "mean: 27.051240089599993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1704256004560,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.3882393951911176,
            "unit": "iter/sec",
            "range": "stddev: 0.006821200954169329",
            "extra": "mean: 418.7184927999965 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03992270356901613,
            "unit": "iter/sec",
            "range": "stddev: 0.007533638884541651",
            "extra": "mean: 25.048403805400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuwenxing",
            "username": "zhuwenxing",
            "email": "wxzhuyeah@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "98cded75464d899ad36b3a2212c2188a9fc0c5bb",
          "message": "Merge pull request #10 from zhuwenxing/test\n\nupdate",
          "timestamp": "2023-10-17T07:04:33Z",
          "url": "https://github.com/zhuwenxing/milvus-backup/commit/98cded75464d899ad36b3a2212c2188a9fc0c5bb"
        },
        "date": 1704342414250,
        "tool": "pytest",
        "benches": [
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_create_backup_perf[100000]",
            "value": 2.505985478654184,
            "unit": "iter/sec",
            "range": "stddev: 0.005741343106379901",
            "extra": "mean: 399.0446107999958 msec\nrounds: 5"
          },
          {
            "name": "testcases/test_perf.py::TestPerf::test_milvus_restore_backup_perf[100000]",
            "value": 0.03565423551074858,
            "unit": "iter/sec",
            "range": "stddev: 2.7381480190733822",
            "extra": "mean: 28.047158652400014 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}