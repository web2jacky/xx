<template>
  <div id="Upload">
    <el-upload v-loading="loading" action :show-file-list="false" :before-upload="handleSelectFile">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
const qiniuData = require("./upload");
const qiniu = require("qiniu");
const uuid = require("uuid/v4");
import setting from "../../settings";
export default {
  name: "Upload",
  props: ["value"],
  computed: {},
  data() {
    return {
      loading: false,
      imageUrl: "",
      cdnUrl: setting.cdnUrl,
      formData: null
    };
  },
  created() {
    if (this.value) {
      this.imageUrl = this.cdnUrl + this.value;
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.imageUrl = this.cdnUrl + this.value;
      } else {
        this.imageUrl = "";
      }
      this.loading = false;
      this.formData = null;
    }
  },
  methods: {
    handleSelectFile(file) {
      this.loading = true;
      this.preview(file);
      this.handleUpload();
      return false;
    },
    // 预览
    preview(file) {
      this.formData = new FormData();
      this.formData.append("file", file);
      this.formData.append("key", "uploads/" + uuid() + ".jpeg");

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.imageUrl = e.target.result;
      };
    },
    // 上传七牛
    async handleUpload() {
      //获取token
      var accessKey = qiniuData.AccessKey;
      var secretKey = qiniuData.SecretKey;
      var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
      var options = {
        scope: qiniuData.Bucket
      };
      var putPolicy = new qiniu.rs.PutPolicy(options);
      var uploadToken = putPolicy.uploadToken(mac);

      this.formData.append("token", uploadToken);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://up-z2.qiniup.com/", true);
      xhr.onreadystatechange = () => {
        if (
          xhr.readyState == 4 &&
          xhr.status == 200 &&
          xhr.responseText != ""
        ) {
          let res = JSON.parse(xhr.responseText);
          this.imageUrl = this.cdnUrl + "/" + res.key;
          this.loading = false;
          this.$emit("input", "/" + res.key);
        }
      };
      xhr.send(this.formData);
    }
  }
};
</script>
<style lang="less" scoped>
#Upload {
  min-width: 120px;
  height: 120px;
  border-radius: 6px;
  /deep/ .el-loading-mask {
    background-color: rgba(0, 0, 0, 0.7);
  }
  /deep/ .el-upload {
    min-width: 120px;
    height: 120px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
  }
  /deep/ .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    min-width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    min-width: 120px;
    max-width: 100%;
    height: 120px;
    max-height: 120px;
    display: block;
  }
}
</style>
