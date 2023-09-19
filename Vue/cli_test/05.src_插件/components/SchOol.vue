<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
export default {
  name: "StuDent",
  data() {
    return {
      name: 'GEO',
      address: '石家庄'
    }
  },
  methods: {
    test() {
      this.hello()
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>