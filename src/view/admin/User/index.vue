<template>
  <div class="user">
    <div class="search_box">
      <el-form :inline="true">
        <el-form-item label="客户名称">
          <el-input v-model="searchData.userName" placeholder="请输入客户名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" @click="add">新增客户</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_box">
      <el-table :data="dataList" border style="width: 100%">
        <el-table-column prop="id" label="id" align="center" v-if="false"></el-table-column>
        <el-table-column prop="userName" label="用户名称" align="center"></el-table-column>
        <el-table-column prop="userKey" label="用户标识" align="center"></el-table-column>
        <el-table-column prop="logoUrl" label="logo链接" align="center"></el-table-column>
        <el-table-column prop="banner1Url" label="banner1链接" align="center"></el-table-column>
        <el-table-column prop="banner2Url" label="banner2链接" align="center"></el-table-column>
        <el-table-column prop="kcUrl" label="开彩网链接" align="center"></el-table-column>
        <el-table-column prop="mUrl" label="H5链接" align="center"></el-table-column>
        <el-table-column prop="pcUrl" label="PC链接" align="center"></el-table-column>
        <el-table-column prop="appUrl" label="app下载链接" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center"></el-table-column>
        <el-table-column prop="address" label="操作" align="center" width="120px">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button style="color:red" @click="remove(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="`${type==0?'新增':'修改'}客户`" :visible.sync="show" center width="500px">
      <el-form label-width="120px">
        <el-form-item label="用户名称：">
          <el-input placeholder="请输入用户名称" v-model="modifyData.userName" clearable></el-input>
        </el-form-item>
        <el-form-item label="用户标识：">
          <el-input v-model="modifyData.userKey" :disabled="type==1"></el-input>
        </el-form-item>
        <el-form-item label="logo链接：">
          <Upload v-model="modifyData.logoUrl"></Upload>上传图片建议大小300px*300px
        </el-form-item>
        <el-form-item label="banner1Url：">
          <Upload v-model="modifyData.banner1Url"></Upload>上传图片建议大小300px*300px
        </el-form-item>
        <el-form-item label="banner2Url：">
          <Upload v-model="modifyData.banner2Url"></Upload>上传图片建议大小300px*300px
        </el-form-item>
        <el-form-item label="开彩网链接">
          <el-input v-model="modifyData.kcUrl"></el-input>
        </el-form-item>
        <el-form-item label="H5链接">
          <el-input v-model="modifyData.mUrl"></el-input>
        </el-form-item>
        <el-form-item label="PC链接">
          <el-input v-model="modifyData.pcUrl"></el-input>
        </el-form-item>
        <el-form-item label="app下载链接">
          <el-input v-model="modifyData.appUrl"></el-input>
        </el-form-item>
        <el-form-item label="域名链接">
          <el-input v-model="modifyData.domains"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="handSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Upload from "../../../components/Updload";
export default {
  name: "user",
  components: {
    Upload
  },
  data() {
    return {
      show: false,
      searchData: {
        userName: ""
      },
      type: 0, //新增还是修改 0 新增 1修改
      modifyData: {
        userName: "",
        userKey: "",
        logoUrl: "",
        banner1Url: "",
        banner2Url: "",
        kcUrl: "",
        mUrl: "",
        pcUrl: "",
        appUrl: "",
        domains: ""
      },
      dataList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let { data } = await this.$http.get("user/findByAllUserName");
      if (data.code == 200) {
        this.dataList = data.List;
      } else {
        this.$message({
          showClose: true,
          message: data.returnMessage,
          type: "error"
        });
      }
    },
    async search() {
      let { data } = await this.$http.request(
        `/user/findByUserName/${this.searchData.userName}`
      );
      if (data.code == 200) {
        this.dataList = [];
        this.dataList.push(data.Userlist);
      } else {
        this.$message({
          showClose: true,
          message: data.returnMessage,
          type: "error"
        });
      }
    },
    handleClick(data) {
      this.show = true;
      this.type = 1;
      let obj = {};
      obj = JSON.parse(JSON.stringify(data));
      console.log(obj);
      this.modifyData = {
        id: obj.id,
        userName: obj.userName,
        userKey: obj.userKey,
        logoUrl: obj.logoUrl,
        banner1Url: obj.banner1Url,
        banner2Url: obj.banner2Url,
        kcUrl: obj.kcUrl,
        mUrl: obj.mUrl,
        pcUrl: obj.pcUrl,
        appUrl: obj.appUrl,
        domains: obj.domains
      };
    },
    async add() {
      this.show = true;
      this.type = 0;
      this.modifyData = {
        userName: "",
        userKey: "",
        logoUrl: "",
        banner1Url: "",
        banner2Url: "",
        kcUrl: "",
        mUrl: "",
        pcUrl: "",
        appUrl: "",
        domains: ""
      };
      console.log(this.modifyData);
    },
    async handSubmit() {
      if (this.type == 0) {
        let { data } = await this.$http.post(`user/insertUserlist`, {
          ...this.modifyData
        });
        if (data.code == 200) {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.show = false;
          this.getList();
        } else {
          this.$message({
            showClose: true,
            message: data.message,
            type: "error"
          });
        }
      } else {
        let { data } = await this.$http.post(`user/UpdateUser`, {
          ...this.modifyData
        });
        if (data.code == 200) {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.show = false;
          this.getList();
        } else {
          this.$message({
            showClose: true,
            message: data.message,
            type: "error"
          });
        }
      }
    },
    remove(row) {
      this.$confirm("此操作将删除该管理员，是否继续？", "删除管理员提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let { data } = await this.$http.get(`user/deleteUser/${row.id}`);
          return Promise.resolve(data);
        })
        .then(data => {
          if (data.code == 200) {
            this.$message({
              message: data.message,
              type: "success"
            });
            this.getList();
          } else {
            this.$message({
              message: data.message,
              type: "error"
            });
          }
        })
        .catch(function() {
          return;
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>