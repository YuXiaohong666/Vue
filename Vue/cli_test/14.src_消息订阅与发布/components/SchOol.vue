<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "SchOol",
  data() {
    return {
      name: 'GEO',
      address: '石家庄'
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息，hello消息的回调执行了', data)
    })

  },
  // 用完总线记得解绑事件
  beforeDestroy() {
    pubsub.unsubcribe(this.pubId)
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