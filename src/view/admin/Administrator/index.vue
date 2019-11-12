<template>
  <div class="Administrator">
    <div class="search_box">
      <el-form :inline="true">
        <el-form-item label="管理员账号">
          <el-input v-model="searchData.userName" placeholder="请输入管理员账号"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchData.status" placeholder="请选择状态">
            <el-option label="全部" value></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" @click="add">新增管理员</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_box">
      <el-table :data="dataList" border style="width: 100%">
        <el-table-column prop="id" label="id" align="center"></el-table-column>
        <el-table-column prop="userName" label="账号" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" align="center" :formatter="statusFn"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center"></el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button style="color:red" @click="remove(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="`${type==0?'新增':'修改'}管理员`" :visible.sync="show" center width="500px">
      <el-form label-width="80px" :rules="rules" ref="modifyData">
        <el-form-item label="账号：" prop="userName">
          <el-input placeholder="请输入账号" :disabled="type==1" v-model="modifyData.userName" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="modifyData.password" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="modifyData.status" placeholder="请选择状态" style="width:100%">
            <el-option label="全部" value></el-option>
            <el-option label="正常" :value="1"></el-option>
            <el-option label="禁用" :value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="handSubmit('modifyData')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Administrator",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      show: false,
      searchData: {
        userName: "",
        status: ""
      },
      type: 0, //新增还是修改 0 新增 1修改
      modifyData: {
        userKey: "",
        password: "",
        status: ""
      },
      dataList: [],
      rules: {
        userName: [{ required: true, message: "不能为空", trigger: "blur" }],
        password: [{ required: true, message: "不能为空", trigger: "blur" }],
        status: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let { data } = await this.$http.get("admin/findByAllAdminlist");
      if (data.code == 200) {
        this.dataList = data.adminlist;
      } else {
        this.$message({
          showClose: true,
          message: data.message,
          type: "error"
        });
      }
    },
    async search() {
      let { data } = await this.$http.get(
        `/admin/${searchData.userName}/${searchData.status}`
      );
      if (data.code == 200) {
        this.$message({
          showClose: true,
          message: "查询成功",
          type: "success"
        });
      } else {
        this.$message({
          showClose: true,
          message: data.message,
          type: "error"
        });
      }
    },
    handleClick(data) {
      this.show = true;
      this.type = 1;

      let obj = {};
      obj = JSON.parse(JSON.stringify(data));

      this.modifyData = {
        id: obj.id,
        userName: obj.userName,
        password: obj.password,
        status: obj.status
      };
    },
    add() {
      this.show = true;
      this.type = 0;
      this.modifyData = {
        userName: "",
        password: "",
        status: ""
      };
    },
    async handSubmit(formName) {
      console.log(formName);
      this.$refs[formName].validate(valid => {
        if (valid == "") {
          console.log(1);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // if (this.type == 0) {
      //   let { data } = await this.$http.post("admin/addAdmin", {
      //     ...this.modifyData
      //   });
      //   if (data.code == 200) {
      //     this.$message({
      //       showClose: true,
      //       message: data.message,
      //       type: "success"
      //     });
      //     this.show = false;
      //     this.getList();
      //   } else {
      //     this.$message({
      //       showClose: true,
      //       message: data.message,
      //       type: "error"
      //     });
      //   }
      // } else {
      //   let { data } = await this.$http.post("admin/UpdateAdmin", {
      //     ...this.modifyData
      //   });
      //   if (data.code == 200) {
      //     this.$message({
      //       message: data.message,
      //       type: "success"
      //     });
      //     this.show = false;
      //     this.getList();
      //   } else {
      //     this.$message({
      //       message: data.message,
      //       type: "error"
      //     });
      //   }
      // }
    },
    remove(row) {
      this.$confirm("此操作将删除该管理员，是否继续？", "删除管理员提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let { data } = await this.$http.get(`admin/deleteAdmin/${row.id}`);
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
    },
    statusFn(row, column, cellValue, index) {
      return row.status == 1 ? "正常" : "禁用";
    }
  }
};
</script>

<style lang="less" scoped>
</style>