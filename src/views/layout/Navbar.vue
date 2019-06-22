<template>
  <header class="navbar">
    <el-row>
      <el-col :span="18" class="logo">
        <div class="navbar__wrap">
          <img class="navbar__wrap--img" src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/brand/logos/milkshop_nidin_logo.png" alt="" >
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">訂購</el-menu-item>
            <el-menu-item index="2">
              <router-link to="/cart">購物車</router-link>
            </el-menu-item>
            <el-menu-item index="3">我的訂單</el-menu-item>
            <el-menu-item index="4">更多</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="navbar__wrap">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="5">通知</el-menu-item>
            <el-menu-item index="6">登出</el-menu-item>
          </el-menu>
          <el-image class="navbar__wrap--icon" src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/brand/logos/milkshop_nidin_logo.png"></el-image>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px 70px;
  box-sizing: border-box;
  margin: 0;
  background: #fff;
  &__wrap{
    display: flex;
    align-items: center;
    &--img{
      margin-right: 20px;
    }
    &--icon{
      height: 36px;
      width: 36px;
      border-radius: 50%;
      margin-left: 15px;
    }
    /deep/ .el-menu-item.is-active{
    }
    /deep/ .el-menu--horizontal{
      border-bottom: 0;
    }
  }
}
.logo img {
  height: 36px;
}
</style>
