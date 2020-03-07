<template>
  <div class="left_wrap">
    <div class="container">Column</div>
    <!-- tip -->
    <div class="tip">
      <span>超高效查询方式，100页只要40秒，排除个性化因素，查询更精准！</span>
      <span>[无线端重要更新，望知悉！]</span>
    </div>
    <!-- 表单 -->
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="媒体：">
        <el-tag
          :type="item.type"
          style="margin-right: 10px;"
          v-for="item in tagItem.media"
          :key="item.id"
        >{{item.title}}</el-tag>
      </el-form-item>
      <el-form-item label="查询模式：">
        <el-tag
          :type="item.type"
          style="margin-right: 10px;"
          v-for="item in tagItem.queryMethods"
          :key="item.id"
        >{{item.title}}</el-tag>
        <span class="query">
          <span></span>
          模拟登录
        </span>
      </el-form-item>
      <el-form-item label="排序方式：">
        <el-tag
          :type="item.type"
          style="margin-right: 10px;"
          v-for="item in tagItem.orderMethods"
          :key="item.id"
        >{{item.title}}</el-tag>
      </el-form-item>
      <el-form-item label="关键词：">
        <el-input v-model="form.keywords" style="width:400px;"></el-input>
      </el-form-item>
      <el-form-item label="旺旺号：">
        <el-input v-model="form.name" style="width:400px;"></el-input>
      </el-form-item>
      <div class="flex firstPage">
        <el-form-item label="起始页：">
          <div class="flex slide_box">
            <div class="slide">
              <div class="pagebox">
                <div class="slide_top">
                  <div class="slide_item"></div>
                </div>
              </div>
              <div class="slide_bottom"></div>
            </div>
            <input class="page" type="text" value="1" />
          </div>
        </el-form-item>
        <el-form-item label="终止页：" style="position: absolute; left: 300px;top: 0px;">
          <div class="flex slide_box">
            <div class="slide">
              <div class="pagebox back">
                <div class="slide_top">
                  <div class="slide_item"></div>
                </div>
              </div>
              <div class="slide_bottom back_bottom"></div>
            </div>
            <input class="page" type="text" value="100" />
          </div>
        </el-form-item>
      </div>
      <el-form-item label-width="30px">
        <div class="box flex j_content">
          <div class="flex">
            <div class="price">价格</div>
            <div class="price_range">
              <span>￥</span>
              -
              <span>￥</span>
            </div>
          </div>

          <div class="downMenu">
            <el-dropdown style="margin-right:10px;">
              <span class="el-dropdown-link">
                筛选条件
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </el-dropdown>
            <el-dropdown>
              <span class="el-dropdown-link">
                发货地
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </el-dropdown>
          </div>
        </div>
      </el-form-item>
    </el-form>
    <div class="flex creatTask j-c">
      <div class="taskFirst" :style="{backgroundColor:item.bg}" v-for="item in tagItem.task" :key="item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        keywords: ""
      },
      tagItem: {
        media: [
          {
            id: 1,
            title: "电脑端",
            type: "info"
          },
          {
            id: 2,
            title: "天猫app",
            type: "info"
          },
          {
            id: 3,
            title: "手淘app",
            type: ""
          },
          {
            id: 4,
            title: "手机网页端",
            type: "info"
          }
        ],
        queryMethods: [
          {
            id: 1,
            title: "旺旺",
            type: ""
          },
          {
            id: 2,
            title: "单个宝贝",
            type: "info"
          },
          {
            id: 3,
            title: "行业",
            type: "info"
          }
        ],
        orderMethods: [
          {
            id: 1,
            title: "默认",
            type: ""
          },
          {
            id: 2,
            title: "销量",
            type: "info"
          },
          {
            id: 3,
            title: "信用",
            type: "info"
          },
          {
            id: 4,
            title: "价格↑",
            type: "info"
          },
          {
            id: 5,
            title: "价格↓",
            type: "info"
          }
        ],
        task: [
          {
            id: 1,
            name: "创建实时任务",
            bg: "#00a2c9"
          },
          {
            id: 2,
            name: "智能云任务",
            bg: "#00C966"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.left_wrap {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background-color: white;
  width: 650px;
  height: 500px;
  margin: 20px;
  // 提示
  .tip {
    background-color: #f1f6fa;
    margin: 10px;
    border-radius: 2px;
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;
    span:last-child {
      color: #2aa5cf;
    }
  }
  // 表单
  .el-form-item__content {
    line-height: 30px !important;
  }
  .el-form-item {
    margin-bottom: 5px;
  }
  .query {
    margin-left: 20px;
    vertical-align: middle;
    span {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 1px solid #ccc;
      vertical-align: middle;
    }
  }
  .box {
    border: 1px solid #eeeeee;
    background-color: #f9f9f9;
    border-radius: 2px;
    width: 400px;
    height: 40px;
    text-align: center;
    .price {
      margin-left: 20px;
      margin-right: 20px;
    }
    .price_range span {
      border: 1px solid #ccc;
      border-radius: 2px;
      background-color: white;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      width: 50px;
      text-align: left;
    }
    .downMenu {
      margin-right: 20px;
    }
  }
  .slide_box {
    vertical-align: middle;
    position: relative;
    .slide {
      line-height: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-items: center;
      position: relative;
      .pagebox {
        box-shadow: 0px 1px 3px #ccc;
        border-radius: 2px;
        z-index: 99;
        .slide_top {
          width: 30px;
          height: 25px;
          border: 1px solid #dadada;
          box-shadow: 0px 1px 3px #ccc inset;
          border-radius: 2px;
          z-index: 10;
          position: relative;
          .slide_item {
            border-left: 1px solid #edecec;
            border-right: 1px solid #edecec;
            height: 12px;
            width: 5px;
            position: absolute;
            left: 12px;
            top: 7px;
          }
        }
      }
      .back {
        position: absolute;
        right: -122px;
      }
      .slide_bottom {
        width: 120px;
        height: 18px;
        border: 1px solid #dfdfdf;
        z-index: 0;
        position: absolute;
        left: 0px;
        top: 11px;
        border-radius: 4px;
        background-color: #fafafa;
      }
    }
    .page {
      width: 40px;
      height: 25px;
      background-color: white;
      border: 1px solid #ccc;
      text-align: center;
      position: absolute;
      left: 150px;
      top: 6px;
      border-radius: 2px;
    }
  }
  .firstPage {
    position: relative;
    margin: 10px 0;
  }
  // 创建实时任务
  .creatTask {
    margin: 20px 0;
    .taskFirst {
      // background-color: #00a2c9;
      color: white;
      border-radius: 5px;
      height: 30px;
      line-height: 30px;
      width: 150px;
      text-align: center;
      margin-right: 10px;
    }
  }
}
</style>