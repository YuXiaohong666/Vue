<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import {mixin, mixin2} from '../mixin'

export default {
  name: "StuDent",
  data() {
    return {
      name: 'GEO',
      address: '石家庄'
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