<template>
  <div id="app">
    <el-container>
      <el-header class="header" height="70px">
        <Navbar></Navbar>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Navbar from '@/views/layout/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
 .header{
   z-index: 100;
       box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
 }
 .main{
   background: #F2F1F4;
   min-height: calc(100vh - 60px);
 }
</style>
