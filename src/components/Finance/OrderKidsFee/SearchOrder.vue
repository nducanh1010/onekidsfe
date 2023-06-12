<template>
<div>
    <div style="
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
            display: inline-block;
          ">
      <el-date-picker style="width: 115px" class="input-common" :clearable="false"
                      @change="searchOrderKidsByProperties()" v-model="dataSearch.date" type="month" value-format="yyyy-MM-dd"
                      format="MM-yyyy">
      </el-date-picker>
      <!-- chọn trạng thái -->
      <el-select style="width: 110px" class="input-common" v-model="dataSearch.status"
                 @change="searchOrderKidsByProperties()" placeholder="Trạng thái">
        <el-option v-for="item in kidStatusList" :key="item.key" :value="item.key" :label="item.value"></el-option>
      </el-select>

      <!-- chọn khối -->
      <el-select class="input-common input-grade" style="width: 90px" v-model="dataSearch.idGrade"
                 @change="changeGradeSearch()" placeholder="Chọn khối">
        <el-option v-for="item in gradeOfSchoolList" :key="item.id" :value="item.id"
                   :label="item.gradeName"></el-option>
      </el-select>

      <!-- chọn lớp -->
      <el-select class="input-common input-class" style="width: 120px" v-model="dataSearch.idClass"
                 placeholder="Chọn lớp" @change="searchOrderKidsByProperties()">
        <el-option v-for="item in classOfGradeList" :key="item.id" :value="item.id"
                   :label="item.className"></el-option>
      </el-select>
      <!-- trạng thái -->
      <el-select class="input-common input-class" style="width: 145px" clearable v-model="dataSearch.statusOrder"
                 placeholder="Chọn trạng thái" @change="filterChangeStatusMethod()">
        <el-option value="orderYet" label="Chưa có hóa đơn"></el-option>
        <el-option value="orderNo" label="Chưa có khoản"></el-option>
        <el-option value="completeNo" label="Chưa hoàn thành"></el-option>
        <el-option value="completeYes" label="Đã hoàn thành"></el-option>
        <el-option value="payPart" label="Đóng còn thiếu"></el-option>
        <el-option value="payFull" label="Đóng thiếu 100%"></el-option>
        <el-option value="orderInComplete" label="Còn tồn hóa đơn"></el-option>
      </el-select>
      <el-input class="input-common input-class" style="width: 220px" placeholder="Nhập tên học sinh" clearable
                v-model="dataSearch.fullName" @clear="searchOrderKidsByProperties()"
                @keyup.enter.native="searchOrderKidsByProperties()">
        <el-button slot="append" icon="el-icon-search" @click="searchOrderKidsByProperties()"></el-button>
      </el-input>
      <el-checkbox @change="searchOrderKidsByProperties()" v-model="dataSearch.walletStatus">Còn dư ví</el-checkbox>
    </div>
    <div style="float: right">
      <el-dropdown @command="handleStatisticalCommandMethod" v-if="checkPermission(['fees_order_statistical'])">
        <el-button type="success" class="button-bottom" icon="el-icon-s-data">
          Thống kê
          <i class="el-icon-caret-bottom" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="statisticalMiniCommand">Số liệu học phí</el-dropdown-item>
          <el-dropdown-item command="statisticalAllCommand">Tổng hợp số liệu</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <el-button v-if="checkPermission(['fees_order_statistical'])" style="border-radius: 0" type="success"
        @click="statisticalMethod()" icon="el-icon-s-data">
        Thống kê
      </el-button> -->
      <el-button style="border-radius: 0; margin-left: 5px" type="success" @click="kidsDialogMethod()"
                 icon="el-icon-search">
        Tìm kiếm
      </el-button>
    </div>
</div>
</template>
<script>
export default {
  name:'SearchOrder',
  data(){
    return{
      dataSearch: {
        date: '',
        status: "STUDYING",
        idClass: "",
        fullName: "",
        walletStatus: false,
        statusOrder: "",
      },
      gradeOfSchoolList:[]

    }
  }
}
</script>