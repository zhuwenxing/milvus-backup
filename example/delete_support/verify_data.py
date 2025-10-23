import os
import time
import numpy as np
from pymilvus import (
    connections,
    Collection,
)

fmt = "\n=== {:30} ===\n"
dim = 8

print(fmt.format("start connecting to Milvus"))
host = os.environ.get('MILVUS_HOST')
if host == None:
    host = "localhost"
print(fmt.format(f"Milvus host: {host}"))
connections.connect("default", host=host, port="19530")

hello_milvus = Collection("hello_milvus_recover")

print(fmt.format("Start Creating index for recovered collection"))
index = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",
    "params": {"nlist": 128},
}
hello_milvus.create_index("embeddings", index)

print(fmt.format("Start loading"))
hello_milvus.load()
# -----------------------------------------------------------------------------
# search based on vector similarity
print(fmt.format("Start searching based on vector similarity"))

rng = np.random.default_rng(seed=19530)
vectors_to_search = rng.random((1, dim))
search_params = {
    "metric_type": "L2",
    "params": {"nprobe": 10},
}

start_time = time.time()

expr = f'pk in [1, 2]'

print(fmt.format(f"Start query with expr `{expr}`"))
result = hello_milvus.query(expr=expr, output_fields=["pk", "random", "var"])
print(len(result))


hello_milvus2 = Collection("hello_milvus2_recover")

print(fmt.format("Start Creating index for recovered collection"))
index = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",
    "params": {"nlist": 128},
}
hello_milvus2.create_index("embeddings", index)

print(fmt.format("Start loading"))
hello_milvus2.load()
# -----------------------------------------------------------------------------
# search based on vector similarity
print(fmt.format("Start searching based on vector similarity"))

rng = np.random.default_rng(seed=19530)
vectors_to_search = rng.random((1, dim))
search_params = {
    "metric_type": "L2",
    "params": {"nprobe": 10},
}

start_time = time.time()

expr = f'pk in [1, 2,3,4,3001,3002,3003,3004]'

print(fmt.format(f"Start query with expr `{expr}`"))
result = hello_milvus.query(expr=expr, output_fields=["pk", "random", "var"])
print(len(result))