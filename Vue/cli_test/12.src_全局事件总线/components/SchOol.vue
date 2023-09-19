<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchOol",
  data() {
    return {
      name: 'GEO',
      address: '石家庄'
    }
  },
  mounted() {
    console.log('School', this.$on)
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  // 用完总线记得解绑事件
  beforeDestroy() {
    this.$bus.$off('hello')
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: aqua;
  padding: 5px;
  margin-top: 30px;
}
</style>