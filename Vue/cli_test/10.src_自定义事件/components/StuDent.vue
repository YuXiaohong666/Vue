<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名发送给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例对象</button>
  </div>
</template>

<script>
export default {
  name: "StuDent",
  data() {
    return {
      name: '小红',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例身上的atguigu事件
      this.$emit('atguigu', this.name)
      this.$emit('demo')
    },
    unbind() {
      this.$off('atguigu')  //只适用于解绑一个自定义事件
      this.$off(['atguigu', 'demo'])  //解绑多个自定义事件
      this.$off()  //解绑所有的自定义事件

    },
    death() {
      this.$destroy()  //销毁了当前Student组件实例，销毁后所有Student实例所有自定义事件全部都不奏效了
    },
    add() {
      console.log('add回调被调用了')
      this.number++
    }
  }
}
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>