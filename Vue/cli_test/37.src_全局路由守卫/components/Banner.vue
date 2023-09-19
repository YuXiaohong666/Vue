<template>
  <div class="page-header"><h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试go</button>
  </div>
</template>

<script>
export default {
  name: "BanneR",
  methods: {
    // 控制浏览器的前进与后退
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    test() {
      // 向前退两步
      this.$router.go(-2)
    }
  }
}
</script>

<style scoped>

</style>