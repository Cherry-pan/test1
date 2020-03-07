<template>
  <div class="right_wrap">
    <div class="container">Column</div>
    <div class="box">
      <h2>数据</h2>
      <p>
        今日搜索客数：
        <span>8373</span>
      </p>
      <p>
        今日搜索客数：
        <span>8373</span>
      </p>
      <el-button size="mini">查看更多&nbsp;&gt;&gt;</el-button>
      <!-- 实时任务 -->
      <ul class="taskbox">
        <li class="taskList">
          <Button-icon class="buttonIcon"></Button-icon>
          <p>实时任务列表</p>
        </li>
        <li class="taskList">
          <Button-icon class="buttonIcon"></Button-icon>
          <p class="demo" style="margin:5px 0;">
            <span></span>
          </p>
        </li>
        <li class="taskList">
          <Button-icon class="buttonIcon"></Button-icon>
          <p class="demo" style="margin:5px 0;">
            <span></span>
          </p>
        </li>
        <li class="taskList">
          <Button-icon class="buttonIcon"></Button-icon>
          <p>实时任务列表</p>
        </li>
      </ul>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%;" :row-class-name="tableRowClassName">
        <el-table-column prop="bianhao" label="编号" width="60"></el-table-column>
        <el-table-column prop="task" label="任务" width="60"></el-table-column>
        <el-table-column prop="number" label="搜客数量"></el-table-column>
        <el-table-column prop="state" label="状态" width="90"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import ButtonIcon from "./icon";
export default {
  components: {
    ButtonIcon
  },
  data() {
    return {
      tableData: [
        {
          bianhao: "1",
          task: "TB 1",
          number: "01/04/2012",
          state: "Default"
        },
        {
          bianhao: "1",
          task: "TB 2",
          number: "01/04/2012",
          state: "Approved"
        },
        {
          bianhao: "2",
          task: "TB 3",
          number: "02/04/2012",
          state: "Declined"
        },
        {
          bianhao: "3",
          task: "TB 4",
          number: "03/04/2012",
          state: "Pending"
        },
        {
          bianhao: "4",
          task: "TB 5",
          number: "04/04/2012",
          state: "Call in to confirm"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.right_wrap {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background-color: white;
  width: 346px;
  // height: 460px;
  margin: 20px;
  margin-left: 0px;
  .box {
    margin: 10px;
    line-height: 36px;
    p {
      font-size: 14px;
    }
    .taskList {
      position: relative;
      height: 70px;
      p {
        position: absolute;
        top: 40px;
        background-color: #7b7b7b;
        color: white;
        font-size: 12px;
        height: 25px;
        line-height: 25px;
        border-radius: 4px;
        padding: 0 10px;
      }
      .buttonIcon {
        position: absolute;
        right: 0;
      }
    }
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .demo {
    width: 200px;
    height: 30px;
    background: repeating-linear-gradient(
      45deg,
      #37a9e3 0,
      #37a9e3 15px,
      #149bdf 15px,
      #149bdf 30px
    );
    position: relative;
    z-index: 3;
    span {
      display: inline-block;
      height: 23px;
      width: 125px;
      border: 1px solid #e9e9e9;
      background-color: #f7f7f7;
      position: absolute;
      left: 200px;
      border-radius: 0 4px 4px 0;
      box-shadow: 0 -1px 1px #e9e9e9;
      // z-index: -99;
    }
  }
}
</style>