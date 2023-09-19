<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <SchOol></SchOol>
    <StuDent></StuDent>
  </div>
</template>

<script>
import SchOol from "@/components/SchOol.vue";
import StuDent from "@/components/StuDent.vue";

export default {
  name: "App",
  components: {StuDent, SchOol},
  data() {
    return {
      msg: '你好啊'
    }
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>