<template>
  <div>
    <div class="container_warp">
      <span class="container">Contaiter</span>
      <div class="row">
        <span class="container">row</span>
        <Button-icon class="buttonIcon"></Button-icon>
        <div class="flex row_item">
          <Left></Left>
          <Right></Right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Layout/Main_left.vue";
import Right from "@/components/Layout/Main_right.vue";
import ButtonIcon from "./icon";
export default {
  components: {
    Left,
    Right,
    ButtonIcon
  }
};
</script>

<style lang="scss" scoped>
.container_warp {
  margin: 20px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background-color: white;
  // width: calc(100vw - 245px);
  // height: calc(100% - 42px);

  .row {
    margin: 20px;
    border: 1px solid #dedede;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: inset 2px 1px 4px #e8e8e8;
    position: relative;
    .buttonIcon {
      position: absolute;
      right: 5px;
      top:10px;
    }
  }
}
</style>