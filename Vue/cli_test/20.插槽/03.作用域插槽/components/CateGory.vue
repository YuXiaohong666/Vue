<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--    定义一个插槽（等着组件的使用者填充）-->
    <slot :games="games"></slot>

  </div>
</template>

<script>
export default {
  name: "CateGory",
  props: ['listData', 'title'],
  data() {
    return {
      games: ['APEX', 'LOL', 'PUBG', 'R6S']
    }
  }
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