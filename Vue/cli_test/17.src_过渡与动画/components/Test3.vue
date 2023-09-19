<template>
  <div>
    <button @click="isShow=!isShow">显示\隐藏</button>
    <!--    在transition标签中引入css动画库，需要在name选项配置为固定的animate__animated animate__bounce，并且加上enter-active-class和leave-active-class这两个属性，
    在后面直接使用css库中的类名就可以直接使用动画效果了-->
    <transition-group
        appear
        enter-active-class="animate__jello"
        leave-active-class="animate__backOutDown"
        name="animate__animated animate__bounce"
    >
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
// 因为引入的是css库，不是js模块，所以后面直接加路径名就行
import 'animate.css'

export default {
  name: "TesT",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
  transition: 1s linear;
}
</style>