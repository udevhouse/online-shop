<template>
    <div class="search">
        <el-card class="search__card">
            <div class="search__card__item" style="display:flex;justify-content:space-between;">
                <div class="search__card__item__btn"
                    :class="activeIndex === 'local'? 'active':''"
                    @click="handleActive('local')"
                >
                    <i class="el-icon-search search__card__item__btn--icon"></i>
                    <p class="search__card__item__btn--text">區域搜尋</p>
                </div>
                <div class="search__card__item__btn"
                    :class="activeIndex === 'nearby'? 'active':''"
                    @click="handleActive('nearby')"
                >
                    <i class="el-icon-discover search__card__item__btn--icon"></i>
                    <p class="search__card__item__btn--text">找找附近</p>
                </div>
                <div class="search__card__item__btn"
                    :class="activeIndex === 'ever'? 'active':''"
                    @click="handleActive('ever')"
                >
                    <i class="el-icon-time search__card__item__btn--icon"></i>
                    <p class="search__card__item__btn--text">曾經點過</p>
                </div>
            </div>
            <template v-if="activeIndex === 'local'">
                <div class="search__card__city">
                    <div class="search__card__city--select">
                        <el-select v-model="value" placeholder="選縣市">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="search__card__city--select">
                        <el-select v-model="value" placeholder="選區域">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'home-search',
  data () {
    return {
      activeIndex: 'local',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    handleActive (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
    .search{
        &__card{
            padding: 10px;
            box-sizing: border-box;
            /deep/ .el-card__body{
                display: flex;
                justify-content:space-between;
                flex-direction: column;
            }
            &__item{
                display:flex;
                justify-content:space-between;
                margin-bottom: 15px;
                &__btn{
                    display: flex;
                    color:#BBBBBB;
                    cursor: pointer;
                    &.active{
                        color:#515151;
                    }
                    &--icon{
                        margin-right: 5px;
                    }
                }
            }
            &__city{
                display: flex;
                padding-top: 20px;
                border-top: 1px solid #BBBBBB;
                &--select{
                    margin: 0 5px;
                }
            }
        }
    }
</style>
