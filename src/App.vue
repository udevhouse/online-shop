<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-main>
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

<style lang="scss">
</style>
