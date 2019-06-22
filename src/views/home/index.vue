<template>
  <div class="home">
    <operate></operate>
  </div>
</template>

<script>
import Operate from '@/views/home/components/Operate'
export default {
  name: 'home',
  components: {
    Operate
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding: 20px 150px;
  }
</style>
