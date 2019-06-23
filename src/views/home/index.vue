<template>
  <div class="home">
    <operate></operate>
    <div class="home__wrap">
      <el-row :gutter="20">
        <el-col :span="12">
          <banner></banner>
        </el-col>
        <el-col :span="12">
          123
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Operate from '@/views/home/components/Operate'
import Banner from '@/views/home/components/Banner'

export default {
  name: 'home',
  components: {
    Operate,
    Banner
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
