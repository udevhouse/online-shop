<template>
  <el-row :gutter="20">
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"
                @click="handleTrash"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" @click="handleClickOrder">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="img">
            <el-image
              style="max-width: 70px; width: 70px; height: 70px; border-radius: 6px;"
              src="https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_2_icon_20190426_100408_59867.png"
              fit="fill"></el-image>
              <i
                style="float: right; padding: 3px 0; color: #db4d6d;"
                class="el-icon-delete-solid"></i>
          </div>
          <h5>迷客夏 - 龍井區</h5>
        </div>
        <div class="card-item">
          <p>1 項商品共 50 元</p>
          <p>2019-06-22 17:19 </p>
        </div>
      </el-card>
    </el-col>
    <el-dialog
      title="提醒"
      :visible.sync="dialogVisible"
      width="30%">
      <span>要刪除整筆訂檔嗎？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>
<script>
export default {
  name: 'Products',
  data () {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClickOrder () {

    },
    handleTrash () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.box-card h5 {
  font-size: 20px;
  color: #595556;
  margin: .82rem 0 0;
}
.box-card .card-item p {
  font-size: 17px;
  color: #8e8e93;
  letter-spacing: .02em;
  margin: .5rem 0 .4rem;
}

.el-col {
  margin-bottom: 10px;
}
</style>
