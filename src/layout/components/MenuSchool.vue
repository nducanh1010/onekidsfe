<template>
  <div class="menu-main">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="getIsOpenCloseManu"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :unique-opened="true">
      <router-link to="/" class="router-link">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span
              slot="title"
              class="onekids-title"
          >ONEKIDS PLUS</span
          >
          </el-menu-item>
      </router-link>
    </el-menu>
    <el-submenu
        index="3"
        v-if="checkPermission(['statistical'])"
    >
      <template slot="title">
        <i class="el-icon-s-data" />
        <span>Thống kê</span>
      </template>
      <el-submenu index="3-1" v-if="checkPermission(['statistical_kids'])">
        <template slot="title">Học sinh</template>
        <router-link to="/chart/statistical/chart-status" class="router-link">
          <el-menu-item
              index="3-1-1"
              v-if="checkPermission(['statistical_kids_status'])"
              @click="changeBreadcrumbMethod('chart-statistical-status')"
          >Trạng thái</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/attendance" class="router-link">
          <el-menu-item
              index="3-1-2"
              v-if="checkPermission(['statistical_kids_attendance'])"
              @click="changeBreadcrumbMethod('chart-statistical-attendance')"
          >Điểm danh</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/evaluate" class="router-link">
          <el-menu-item
              index="3-1-3"
              v-if="checkPermission(['statistical_kids_evaluate'])"
              @click="changeBreadcrumbMethod('chart-statistical-evaluate')"
          >Nhận xét</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/album" class="router-link">
          <el-menu-item
              index="3-1-4"
              v-if="checkPermission(['statistical_kids_album'])"
              @click="changeBreadcrumbMethod('chart-statistical-album')"
          >Album ảnh</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/fees" class="router-link">
          <el-menu-item
              index="3-1-5"
              v-if="checkPermission(['statistical_kids_fees'])"
              @click="changeBreadcrumbMethod('chart-statistical-fees')"
          >Học phí</el-menu-item
          >
        </router-link>
      </el-submenu>
      <el-submenu index="3-2" v-if="checkPermission(['statistical_employee'])">
        <template slot="title">Nhân sự</template>
        <router-link to="/chart/statistical/chart-status-employee" class="router-link">
          <el-menu-item
              index="3-2-1"
              v-if="checkPermission(['statistical_employee_status'])"
              @click="changeBreadcrumbMethod('chart-statistical-status-employee')"
          >Trạng thái</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/attendance-employee" class="router-link">
          <el-menu-item
              index="3-2-2"
              v-if="checkPermission(['statistical_employee_attendance'])"
              @click="changeBreadcrumbMethod('chart-statistical-attendance-employee')"
          >Điểm danh</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/finace" class="router-link">
          <el-menu-item
              index="3-2-3"
              v-if="checkPermission(['statistical_employee_salary'])"
              @click="changeBreadcrumbMethod('chart-statistical-finace')"
          >Công lương</el-menu-item
          >
        </router-link>
      </el-submenu>
      <el-submenu index="3-3" v-if="checkPermission(['statistical_internal'])">
        <template slot="title">Nội bộ</template>
        <router-link to="/chart/statistical/cashinternal-paymoney" class="router-link">
          <el-menu-item
              index="3-3-1"
              v-if="checkPermission(['statistical_internal_inout'])"
              @click="changeBreadcrumbMethod('chart-statistical-cashinternal-paymoney')"
          >Thu chi</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/cashinternal-cashbook" class="router-link">
          <el-menu-item
              index="3-3-2"
              v-if="checkPermission(['statistical_internal_cashbook'])"
              @click="changeBreadcrumbMethod('chart-statistical-cashinternal-cashbook')"
          >Quỹ nhà trường</el-menu-item
          >
        </router-link>
        <router-link to="/chart/statistical/wallet-parent" class="router-link">
          <el-menu-item
              index="3-3-3"
              v-if="checkPermission(['statistical_internal_wallet'])"
              @click="changeBreadcrumbMethod('chart-statistical-wallet-parent')"
          >Ví phụ huynh</el-menu-item
          >
        </router-link>
      </el-submenu>
      <el-submenu index="3-4" v-if="checkPermission(['statisticalFinance'])">
        <template slot="title">
          <span>Thống kê báo cáo</span>
        </template>
        <router-link
            v-if="checkPermission(['statisticalFinance_statistical'])"
            to="/finace/statistical/money"
            class="router-link"
        >
          <el-menu-item
              index="3-4-1"
              @click="changeBreadcrumbMethod('finace-statistical-money')"
          >Thống kê</el-menu-item
          >
        </router-link>
        <router-link
            v-if="checkPermission(['statisticalFinance_money'])"
            to="/finace/statistical/finance"
            class="router-link"
        >
          <el-menu-item
              index="3-4-2"
              @click="changeBreadcrumbMethod('finace-statistical-finance')"
          >Số liệu báo cáo</el-menu-item
          >
        </router-link>
        <router-link
            v-if="checkPermission(['statisticalFinance_groupFees'])"
            to="/finace/statistical/kids/group"
            class="router-link"
        >
          <el-menu-item
              index="3-4-3"
              @click="changeBreadcrumbMethod('finace-statistical-kids-group')"
          >Nhóm học phí</el-menu-item
          >
        </router-link>
        <router-link
            v-if="checkPermission(['statisticalFinance_groupSalary'])"
            to="/finace/statistical/employee/group"
            class="router-link"
        >
          <el-menu-item
              index="3-4-4"
              @click="changeBreadcrumbMethod('finace-statistical-employee-group')"
          >Nhóm công lương</el-menu-item
          >
        </router-link>
      </el-submenu>
    </el-submenu>

  </div>
</template>
<script>

</script>