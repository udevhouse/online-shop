<template>
  <div class="text-center col-xs-12 cart-default">
    <h6 class="text-default">購物車內沒有商品</h6>
    <p>您尚未選購任何商品</p>
    <p>您可以點擊下方按鈕進入門市列表</p>
    <p>
      或到
      <router-link
        to="/order"
        tag="span"
        class="text-pink c-pointer">我的訂單</router-link>
      查看訂單紀錄
    </p>
    <router-link to="/">
      <el-button class="btn-yellow btn">開始選購</el-button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'EmptyProduct'
}
</script>
<style lang="scss" scoped>
.cart-default {
  margin-top: 10%;
}
.text-center {
  // display: flex;
  // justify-content: center;
  text-align: center;
}
.text-default {
  color: #595556;
  font-weight: 400;
  padding-bottom: 10px;
  font-size: 17px;
}
p {
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
.text-pink {
  color: #db4d6d;
}
.c-pointer {
  cursor: pointer;
}
.btn {
  margin-top: 50px;
  font-size: 20px;
  padding: 1.188rem 15px;
  min-width: 120px;
  color: #333;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-yellow {
  background: #ffe153;
}

@media (min-width: 992px) {
  .btn {
    min-width: 135px;
  }
}
</style>
