<template>
  <div class="hello flex">
    <Nav></Nav>
    <Main></Main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/Layout/Nav.vue";
import Main from "@/components/Layout/Main.vue";

export default {
  components: {
    Nav,
    Main
  },
  computed: {
    ...mapState(["nickname"])
  },
  created() {
    console.log(this.nickname);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello{
  height: 100vh;
  width: 100vw;
} */
</style>
