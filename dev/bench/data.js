window.BENCHMARK_DATA = {
  "lastUpdate": 1699331177196,
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
      }
    ]
  }
}