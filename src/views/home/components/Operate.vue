<template>
    <div class="operate">
        <el-card class="box-card operate__card">
            <div class="operate__card__item">
                <el-image class="operate__card__item--img" src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/brand/icons/2_cbe469a21040cb3d.png"></el-image>
                <p class="operate__card__item--text">迷客夏</p>
            </div>
            <div class="operate__card__item" style="margin-right:20px">
                <div class="operate__card__item__btn">
                    <i class="el-icon-ice-drink operate__card__item__btn--icon"></i>
                    <p class="operate__card__item__btn--text">訂購</p>
                </div>
                <div class="operate__card__item__btn">
                    <i class="el-icon-wallet operate__card__item__btn--icon"></i>
                    <p class="operate__card__item__btn--text">優惠券</p>
                </div>
                <div class="operate__card__item__btn">
                    <i class="el-icon-chat-dot-round operate__card__item__btn--icon"></i>
                    <p class="operate__card__item__btn--text">回饋</p>
                </div>
                <div class="operate__card__item__btn">
                    <i class="el-icon-info operate__card__item__btn--icon"></i>
                    <p class="operate__card__item__btn--text">資訊</p>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'home-operate'
}
</script>

<style lang="scss" scoped>
    .operate{
        &__card{
            padding: 10px 30px;
            /deep/ .el-card{
                border-radius: 5px;
            }
            /deep/ .el-card__body{
                display: flex;
                justify-content: space-between;
            }
            &__item{
                display: flex;
                align-items: center;
                &--img{
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                }
                &--text{
                    font-size: 25px;
                }
                &__btn{
                    text-align: center;
                    padding:0 5px;
                    margin: 0 10px;
                    cursor: pointer;
                    &--icon{
                        font-size: 30px;
                    }
                    &--text{
                        margin: 7px 0;
                        color: rgb(51, 51, 51);
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>
