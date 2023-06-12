<template>
  <div class="content">
    <KidsSearchTable/>
    <KidsExcelTable/>
  </div>
</template>
<script>
import KidsSearchTable from "@/components/FinanceVer2/KidsTableSearch.vue";
import KidsExcelTable from "@/components/FinanceVer2/KidsExcelTable.vue";

export default {
  components: {KidsExcelTable, KidsSearchTable}
}
</script>