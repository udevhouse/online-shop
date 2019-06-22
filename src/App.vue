<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
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
