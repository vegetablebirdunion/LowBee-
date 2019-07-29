<template>
<div class="layout">
  <div class="layout-left">
    <left></left>
  </div>
  <div class="layout-center">
    sd
  </div>
  <div class="layout-right">
    dfg
  </div>
</div>
</template>

<script>
import left from './left'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    left: left
  }
}
</script>

<style lang="scss" scoped>
.layout{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .layout-left{
    width: 50px;
    background-color:#2E3C57;
  }
  .layout-center{
    width: 35%;
    background-color: #ECEBE9;
  }
  .layout-right{
    width: calc(100% - 50px - 35%);
    background-color: #F5F5F5;
  }
}
</style>
