<template>
  <div class="table-content row-data">
    <!-- chi tiết khoản các học sinh -->
    <el-table ref="kidsPackageForKidsRef" :data="responseFilterList" :empty-text="textTable" v-loading="loadingData"
              :element-loading-text="$tableLoadding"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(255,255,255, 0)" :cell-style="tableRowStyle"
              :header-cell-style="tableHeaderColor" @selection-change="handleSelectionChange" :max-height="$tableMaxHeight"
              border>
      <el-table-column type="selection" align="center" width="55"></el-table-column>
      <el-table-column type="index" fixed label="STT" width="50" align="center"></el-table-column>
      <el-table-column width="125" align="center" label="Mã hóa đơn">
        <template slot-scope="scope" v-if="scope.row.orderKids != null">
          <span>{{ scope.row.orderKids.code }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="150" fixed  label="Họ tên">
        <template slot-scope="scope">
          <el-button class="click-in-row" type="text" @click="detialApprovedKidsMethod(scope.row)">
            {{ scope.row.fullName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
          width="120"
      label="Biệt danh">
      </el-table-column>
      <el-table-column
          width="120"
          label="Lớp">
      </el-table-column>
      <el-table-column
          align="center"
          width="70"
          label="Hiển thị">
      </el-table-column>


<!--      <el-table-column label="Ngày sinh" width="120" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ scope.row.birthDay | formatDate }}</span>-->
<!--        </template></el-table-column>-->
<!--      <el-table-column align="center" width="70" label="Hiển thị">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <el-checkbox v-model="scope.row.orderKids.view" @change="viewOrderMethod(scope.row)"></el-checkbox>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="center" width="70" label="Khóa">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <el-checkbox :disabled="!checkPermission(['fees_order_locked'])" v-model="scope.row.orderKids.locked"-->
<!--                       @change="lockedOrderMethod(scope.row)"></el-checkbox>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="center" width="120" label="Tồn hóa đơn cũ">-->
<!--        <template slot-scope="scope" v-if="scope.row.inCompleteOrderNumber > 0">-->
<!--          &lt;!&ndash; <span>{{scope.row.inCompleteOrderNumber}}</span> &ndash;&gt;-->
<!--          <el-button type="text" size="mini" @click="orderKidsMonthNoMethod(scope.row)">{{scope.row.inCompleteOrderNumber}}</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="center" width="125" label="Trạng thái">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <span v-if="scope.row.orderKids.totalNumber == 0">Chưa có khoản</span>-->
<!--          <span v-else-if="-->
<!--                scope.row.orderKids.totalNumber != scope.row.orderKids.enoughNumber-->
<!--              ">Chưa hoàn thành</span>-->
<!--          <span v-else>Đã hoàn thành</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="center" width="150" label="Đủ-Thiếu-Chưa đóng">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <span style="color: #606266">{{ scope.row.orderKids.enoughNumber }}</span>-->
<!--          - -->
<!--          <span style="color: orange">{{ scope.row.orderKids.partNumber }}</span>-->
<!--          - -->
<!--          <span style="color: red">{{ scope.row.orderKids.emptyNumber }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Còn lại thu">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--              <span class="high-light">{{-->
<!--                  scope.row.orderKids.totalMoneyRemainIn | formatCurrencyNew-->
<!--                }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Còn lại chi">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--              <span class="high-light">{{-->
<!--                  scope.row.orderKids.totalMoneyRemainOut | formatCurrencyNew-->
<!--                }}</span>-->
<!--        </template></el-table-column>-->
<!--      <el-table-column align="right" width="120" label="T.Thu - T.Chi">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--              <span>{{-->
<!--                  (scope.row.orderKids.moneyTotalIn - scope.row.orderKids.moneyTotalOut)-->
<!--                      | formatCurrencyNew-->
<!--                }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Tổng thu">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <span>{{ scope.row.orderKids.moneyTotalIn | formatCurrencyNew }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Đã thu">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <span>{{ scope.row.orderKids.moneyPaidIn | formatCurrencyNew }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Thu thiếu">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--              <span>{{-->
<!--                  (scope.row.orderKids.moneyTotalIn - scope.row.orderKids.moneyPaidIn)-->
<!--                      | formatCurrencyNew-->
<!--                }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Tổng chi">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <span>{{ scope.row.orderKids.moneyTotalOut | formatCurrencyNew }}</span>-->
<!--        </template></el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Đã chi">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--          <span>{{ scope.row.orderKids.moneyPaidOut | formatCurrencyNew }}</span>-->
<!--        </template></el-table-column>-->
<!--      <el-table-column align="right" width="120" label="Chi thiếu">-->
<!--        <template slot-scope="scope" v-if="scope.row.orderKids != null">-->
<!--              <span>{{-->
<!--                  (scope.row.orderKids.moneyTotalOut - scope.row.orderKids.moneyPaidOut)-->
<!--                      | formatCurrencyNew-->
<!--                }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column label="Tác vụ" fixed="right" :width="checkPermission(['fees_order_payment']) ? 330 : 230"-->
<!--                       align="center">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button v-if="checkPermission(['fees_order_payment'])" :disabled="-->
<!--                scope.row.orderKids == null ||-->
<!--                scope.row.orderKids.totalNumber == 0 ||-->
<!--                scope.row.orderKids.locked-->
<!--              " size="mini" type="primary" @click="orderKidsCasherMethod(scope.row)">Thanh toán</el-button>-->
<!--          <el-button :disabled="-->
<!--                scope.row.orderKids == null || scope.row.orderKids.totalNumber == 0-->
<!--              " type="success" size="mini" @click="orderKidsDetailMethod(scope.row)">-->
<!--            Chi tiết</el-button>-->
<!--          <el-button :disabled="-->
<!--                scope.row.orderKids == null || scope.row.orderKids.totalNumber == 0-->
<!--              " size="mini" type="warning" @click="orderKidsHistoryMethod(scope.row)">-->
<!--            Lịch sử</el-button>-->
<!--          <el-button :disabled="-->
<!--                scope.row.orderKids == null || scope.row.orderKids.totalNumber == 0-->
<!--              " type="success" size="mini" @click="orderKidsMonthMethod(scope.row)"><i-->
<!--              class="el-icon-circle-plus"></i></el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--    <div style="float: right; margin: 15px 0">-->
<!--      <el-button :loading="loaddingButtonGenerate" type="success" class="button-bottom"-->
<!--                 @click="gengerateOrderMethod()">-->
<!--        Khởi tạo hóa đơn-->
<!--      </el-button>-->

<!--      <el-dropdown @command="handlePrintCommandMethod">-->
<!--        <el-button :loading="loaddingButtonPrint" type="success" class="button-bottom">-->
<!--          In hóa đơn-->
<!--          <i class="el-icon-caret-bottom" />-->
<!--        </el-button>-->
<!--        <el-dropdown-menu slot="dropdown">-->
<!--          <el-dropdown-item command="allPrintCommand">Tổng hợp</el-dropdown-item>-->
<!--          <el-dropdown-item command="inPrintCommand">Thu</el-dropdown-item>-->
<!--          <el-dropdown-item command="outPrintCommand">Chi</el-dropdown-item>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->

<!--      <el-dropdown @command="handleCommandMethod">-->
<!--        <el-button type="success" class="button-bottom" :loading="loaddingButtonAction">-->
<!--          Tác vụ-->
<!--          <i class="el-icon-caret-bottom" />-->
<!--        </el-button>-->
<!--        <el-dropdown-menu slot="dropdown">-->
<!--          <el-dropdown-item command="viewCommand">Hiển thị</el-dropdown-item>-->
<!--          <el-dropdown-item command="unViewCommand">Bỏ hiển thị</el-dropdown-item>-->
<!--          <el-dropdown-item v-if="checkPermission(['fees_order_locked'])"-->
<!--                            command="lockedCommand">Khóa</el-dropdown-item>-->
<!--          <el-dropdown-item v-if="checkPermission(['fees_order_locked'])" command="unLockedCommand">Bỏ-->
<!--            khóa</el-dropdown-item>-->
<!--          <el-dropdown-item command="viewDetailAll">Xem tổng hợp</el-dropdown-item>-->
<!--          <el-dropdown-item command="exportExcelNowCommand">Xuất Excel hiện tại</el-dropdown-item>-->
<!--          <el-dropdown-item command="exportExcelCommand">Xuất Excel học phí</el-dropdown-item>-->
<!--          <el-dropdown-item command="sendNotifyFees">Báo học phí qua SMS</el-dropdown-item>-->
<!--          <el-dropdown-item command="sendNotifyFeesApp">Báo học phí qua App</el-dropdown-item>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
      </el-table>
    </div>
</template>
<script>
export default {

  name:'KidsExcelTable',

}
</script>