<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--    定义一个插槽（等着组件的使用者填充）-->
    <slot>我是一个默认值，当使用者没有传递具体结构时，我会出现在页面上</slot>

  </div>
</template>

<script>
export default {
  name: "CateGory",
  props: ['listData', 'title']
}
</script>

<style scoped>
.category {
  background-color: #00d9ff;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>