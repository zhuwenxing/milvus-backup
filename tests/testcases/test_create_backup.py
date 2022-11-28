import time
import pytest

from base.client_base import TestcaseBase
from common import common_func as cf
from common import common_type as ct
from common.common_type import CaseLabel
from utils.util_log import test_log as log
from api.milvus_backup import MilvusBackupClient
prefix = "create_backup"
backup_prefix = "backup"
suffix = "_bak"

client = MilvusBackupClient("http://localhost:8080/api/v1")


class TestCreateBackup(TestcaseBase):
    """ Test case of end to end"""
    @pytest.mark.tags(CaseLabel.L1)
    @pytest.mark.parametrize("backup_num", [0, 1, 3])
    @pytest.mark.parametrize("collection_type", ["binary", "float", "all"])
    @pytest.mark.parametrize("collection_num", [1, 3])
    def test_milvus_create_backup_default(self):
        # create
        name_origin = cf.gen_unique_str(prefix)
        back_up_name = cf.gen_unique_str(backup_prefix)        
        log.info(f"name_origin:{name_origin}, back_up_name: {back_up_name}")
        self.prepare_data(name_origin)
        res, _ = self.utility_wrap.has_collection()
        log.info(f"list collection: {res}")
        # backup
        res = client.create_backup({"async": False, "backup_name": back_up_name, "collection_names": [name_origin]})
        log.info(f"create_backup {res}")
        res = client.list_backup()
        all_backup = [r["name"] for r in res["data"]]
        assert back_up_name in all_backup
        backup = client.get_backup(back_up_name)
        assert backup["data"]["name"] == back_up_name
        backup_collections = [backup["collection_name"]for backup in backup["data"]["collection_backups"]]
        assert name_origin in backup_collections









