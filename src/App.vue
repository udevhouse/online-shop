<template>
  <div id="app">
    <el-container>
      <el-header height="70px">
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
 .main{
   background: #F2F1F4;
   min-height: calc(100vh - 60px);
 }
</style>
