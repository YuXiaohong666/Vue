<template>
  <div>
    <!--    ref属性可以标记元素，使Vue收集该元素-->
    <h1 ref="title" v-text="msg"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <!--    因为传参必须加上双引号，但是这样就会变成一个字符串，加上一个冒号，使用v-bind指令，这样里面就当做js语句执行了，会进行加一操作还不是拼接字符串-->
    <StuDent :age="23+1" name="小红" sex="男"></StuDent>
  </div>
</template>

<script>
import StuDent from "@/components/StuDent.vue";

export default {
  name: "App",
  data() {
    return {
      msg: '欢迎学习Vue'
    }
  },

  methods: {
    showDOM() {
      console.log(this.$refs.title)
    }
  },
  components: {StuDent}
}
</script>

<style scoped>

</style>