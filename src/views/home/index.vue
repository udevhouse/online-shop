<template>
  <div class="home">
    <operate></operate>
    <div class="home__wrap">
      <el-row :gutter="20">
        <el-col :span="12">
          <banner></banner>
        </el-col>
        <el-col :span="12">
          <search></search>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Operate from '@/views/home/components/Operate'
import Banner from '@/views/home/components/Banner'
import Search from '@/views/home/components/Search'

export default {
  name: 'home',
  components: {
    Operate,
    Banner,
    Search
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding: 20px 150px;
    &__wrap{
      margin:20px 0;
    }
  }
</style>
