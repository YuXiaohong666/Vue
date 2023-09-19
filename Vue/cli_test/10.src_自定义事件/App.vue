<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!--    通过父组件给子组件传递函数类型的props实现：子传父数据-->
    <SchOol :getSchoolName="getSchoolName"></SchOol>
    <!--    通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或者v-on）-->
    <StuDent @demo="m1" v-on:atguigu="getStudentName"></StuDent>
    <!--    第二种写法：使用ref，效果同上-->
    <!--    <StuDent ref="student"></StuDent>-->
  </div>
</template>

<script>
import SchOol from "@/components/SchOol.vue";
import StuDent from "@/components/StuDent.vue";

export default {
  name: "App",
  components: {StuDent, SchOol},
  data() {
    return {
      msg: '你好啊'
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name) {
      console.log('App收到了学生名：', name)
    },
    m1() {
      console.log('m1事件被触发了')
    },
    // 使用第二种方法更加灵活，可以添加延时器等
    // mounted() {
    //   this.$refs.student.$on('atguigu', this.getStudentName)
    // }
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>