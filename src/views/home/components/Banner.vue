<template>
    <div class="banner">
        <div class="banner__item" v-for="item of 6" :key="item">
            <el-image class="banner__item--img" src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/banner/b_2_h_b_w_20190617_133852_8d427.jpg"></el-image>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home-banner'
}
</script>

<style lang="scss" scoped>
    .banner{
        &__item{
            margin-bottom: 10px;
            &--img{
                width: 100%;
                height: 90px;
            }
        }
    }
</style>
