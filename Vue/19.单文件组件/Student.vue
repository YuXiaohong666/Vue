<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: 'Student',
  data () {
    return {
      name: '小红',
      age: 23
    }
  }
}
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: aqua;
}
</style>

