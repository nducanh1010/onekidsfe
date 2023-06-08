<template>
  <div>
    <KidsSearchTable/>
    <KidsExcelTable/>
  </div>
</template>
<script>

import {defineComponent} from "vue";
import KidsSearchTable from "@/components/FinanceVer2/KidsTableSearch.vue";
import KidsExcelTable from "@/components/FinanceVer2/KidsExcelTable.vue";

export default defineComponent({
  components: {KidsExcelTable, KidsSearchTable}
})
</script>