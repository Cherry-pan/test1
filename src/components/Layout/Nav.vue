<template>
  <div class="nav_wrap flex j-c">
    <ul>
      <li class="flex j-c a_items" v-for="(item) in nav" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { id: 1, title: "搜索新客" },
        { id: 2, title: "手动开发" },
        { id: 3, title: "自动开发" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav_wrap {
  background-color: #ccc;
  width: 200px;
  // height: 100vh;
  border-left: 3px solid #000;
  ul {
    margin-top: 120px;
  }
  ul li {
    background-color: #000;
    height: 50px;
    margin: 20px 0;
    color: white;
    font-weight: bold;
    width: 200px;
  }
}
</style>