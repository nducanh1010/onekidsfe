<template>
  <div class="content">
    <el-dialog
      :visible.sync="dialogVisibleEx"
      width="75%"
      :before-close="closeDialog"
      :close-on-click-modal="false"
      top="2vh"
      title="THÊM THỜI KHÓA BIỂU TỪ EXCEL"
    >
      <div style="display: flex; justify-content: space-between">
        <el-upload
          ref="upload"
          class="upload-demo"
          action
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :auto-upload="false"
          :on-change="importFile"
          :limit="1"
          :on-exceed="handleExceed"
          :on-preview="handleFileRequest"
        >
          <el-button @change="importFile()" size="mini" type="primary"
            >Nhập file</el-button
          >
        </el-upload>
        <el-button
          @click="dowloadFile()"
          size="mini"
          type="primary"
          style="width: 100px; max-height: 30px"
        >
          <a
            href="https://upload.onekids.edu.vn/sysfiles/other/MAU_TKB_TUAN_50.xlsx"
            style="text-decoration: none; color: white"
          >
            Mẫu File</a
          ></el-button
        >
      </div>
      <div style="margin-top: 50px">
        <div class="button-click-left;" style="display: inline-block">
          <el-date-picker
            v-model="createTimeClassMenu"
            type="week"
            value-format="yyyy-MM-dd"
            format="Tuần WW(từ dd-MM-yyyy)"
            placeholder="Chọn tuần"
            :clearable="false"
            @change="getValueDateClassMenu(createTimeClassMenu)"
          ></el-date-picker>
          <el-select
            style="width: 400px; display: inline-block; margin-left: 5px"
            v-model="listCreateTimeClassMenu"
            multiple
            @change="changeWeek()"
            placeholder="Tuần đã chọn"
          ></el-select>
        </div>
        <div style="text-align: center; display: inline-block; margin-left: 200px">
          <el-select
            v-model="createMultiClassMenu.listIdClass"
            class="button-left"
            placeholder="Chọn lớp"
            clearable="true"
            style="margin-right: 10px; width: 300px"
            multiple="true"
          >
            <el-option
              v-for="item in listClass"
              :key="item.id"
              :label="item.className"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div style="margin-top: 10px">
          <el-button
            @click="handleChange()"
            size="mini"
            type="primary"
            v-loading.fullscreen.lock="fullscreenLoading"
            >Tải lên</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MaClassService from "@/services/MaClassService";
import moment from "moment";
import ScheduleService from "../../services/ScheduleService";

export default {
  props: {
    dialogVisibleEx: null,
  },
  data() {
    return {
      url: "https://upload.onekids.edu.vn/sysfiles/other/MAU_TKB_TUAN_50.xlsx",
      fullscreenLoading: false,
      createTimeClassMenu: "",
      listTimeClassMenu: "",
      listCreateTimeClassMenu: [],
      file: "",
      fileList: [],
      listClass: [],
      IndexRow: 0,
      loading: "",
      tabListClassMenuDetail: [],
      createMultiClassMenu: {
        weekClassMenu: [],
        listIdClass: "",
      },
    };
  },
  methods: {
    openFullScreen() {
      this.loading = this.$loading({
        lock: true,
        text: "Dữ liệu đang xử lý. Xin vui lòng chờ trong giây lát!",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);
    },
    // dowloadFile() {
    //   const url = this.url;
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", "MAU_TKB_TUAN_50.xlsx"); //or any other extension
    //   document.body.appendChild(link);
    //   link.click();
    // },
    closeDialog() {
      //   this.$refs["createMultiSchedule"].resetFields();
      this.$emit("dialog-close");
      this.$refs.upload.clearFiles();
      this.file = "";
      this.fileList = [];
      (this.createTimeClassMenu = ""), (this.listCreateTimeClassMenu = []);
      this.createMultiClassMenu.weekClassMenu = [];
      this.createMultiClassMenu.listIdClass = "";
      this.$emit("dialog-close");
      //   this.resetData();
    },
    importFile(file) {
      this.file = file.raw;
    },
    handleChange() {
      this.openFullScreen();
      console.log("hihi");
      let formData = new FormData();
      let idClass = this.createMultiClassMenu.listIdClass;
      let timeClassMenu = this.createMultiClassMenu.weekClassMenu;
      formData.append("multipartFile", this.file);
      formData.append("weekClassMenu", timeClassMenu);
      // formData.append("isApproved", approved);
      formData.append("listIdClass", idClass);
      console.log(formData);
      if (
        this.createMultiClassMenu.listIdClass.length > 0 &&
        this.createMultiClassMenu.weekClassMenu.length > 0
      ) {
        ScheduleService.createFileExcel(formData)
          .then((res) => {
            this.loading.close();
            if (res.data) {
              this.$message({
                message: "Tải lên file thời khóa biểu thành công",
                type: "success",
              });
              setTimeout(() => {
                this.closeDialogByButton();
              }, 500);
            }
          })
          .catch((err) => {
            this.loading.close();
            if (err.response) {
              if (err.response.status == 400) {
                this.$message({
                  message: err.response.data.message,
                  type: "error",
                });
              } else {
                this.$message({
                  message: err.response.data.message,
                  type: "error",
                });
              }
            } else {
              this.$message({
                message: "File không đúng định dạng.",
                type: "error",
              });
            }
          });
      } else {
        this.$message({
          message: "Bạn phải chọn lớp và tuần áp dụng",
          type: "error",
        });
      }
    },
    handleExceed() {
      this.$message.warning(`Chỉ được chọn 1 File`);
    },
    getValueDateClassMenu(createTimeClassMenu) {
      this.createTimeClassMenu = createTimeClassMenu;
      let a = this.createTimeClassMenu;
      let weeknumber = moment(a, "YYYY-MM-DD").isoWeek();
      let formatweek =
        "Tuần " + weeknumber + "(từ " + moment(a).format("DD-MM-YYYY") + ")";
      let indexOfFormatWeek = this.listCreateTimeClassMenu.indexOf(formatweek);
      if (indexOfFormatWeek == -1) {
        this.listCreateTimeClassMenu.push(formatweek);
      } else {
        this.listCreateTimeClassMenu.splice(indexOfFormatWeek, 0);
      }
      let indexOfCreateTimeClassMenu = this.createMultiClassMenu.weekClassMenu.indexOf(a);
      if (indexOfCreateTimeClassMenu == -1) {
        this.createMultiClassMenu.weekClassMenu.push(a);
      } else {
        this.createMultiClassMenu.weekClassMenu.splice(indexOfCreateTimeClassMenu, 0);
      }
    },
    changeWeek() {
      let c = this.listCreateTimeClassMenu;
      this.createMultiClassMenu.weekClassMenu = [];
      c.forEach((element) => {
        {
          let date = element.slice(-11, -1);
          var newdate = date.split("-").reverse().join("-");
          this.createMultiClassMenu.weekClassMenu.push(newdate);
        }
      });
    },
    getAllClass() {
      MaClassService.getAllClassCommon()
        .then((res) => {
          this.listClass = res.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    closeDialogByButton() {
      this.$refs.upload.clearFiles();
      this.file = "";
      this.fileList = [];
      (this.createTimeClassMenu = ""), (this.listCreateTimeClassMenu = []);
      this.createMultiClassMenu.weekClassMenu = [];
      this.createMultiClassMenu.listIdClass = "";
      this.$emit("dialog-close");
      // this.createTimeClassMenu.weekClassMenu="";
      // this.createTimeClassMenu.listIdClass="";
      // this.file="";
    },
  },
};
</script>
