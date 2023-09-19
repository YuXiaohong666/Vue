<template>
  <div class="demo">
    <h2>学生姓名：{{ name | mySlice }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "StuDent",
  data() {
    return {
      name: '小红aweadwa',
      sex: '男'
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>