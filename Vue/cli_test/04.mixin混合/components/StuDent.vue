<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import {mixin, mixin2} from '../mixin'

export default {
  name: "StuDent",
  data() {
    return {
      name: '小红',
      sex: '男'
    }
  },
  mixins: [mixin, mixin2]
}
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>