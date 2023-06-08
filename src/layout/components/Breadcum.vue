<html>
<el-breadcrumb>
  {{breadcumbs}}
</el-breadcrumb>
</html>
  <script>
  export  default {
    data() {
      return{
        breadcumbs: this.$router.name
      }

    }
    
  }
  </script>