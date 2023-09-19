<template>
  <div>
    <button @click="isShow=!isShow">显示\隐藏</button>
    <!--    appear属性可以让页面一打开或者一刷新就会播放动画-->
    <!--    如果有多组标签需要添加动画属性，则必须给每个transition标签配置name属性用于区分-->
    <transition appear name="hello">
      <h1 v-show="isShow">你好啊！</h1>
    </transition>

    <transition appear name="hello2">
      <h2 v-show="isShow">你好啊！</h2>
    </transition>

  </div>
</template>

<script>
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
}

h2 {
  background-color: aqua;
}

.hello-enter-active {
  animation: xiaohong 1s linear;
}

.hello-leave-active {
  animation: xiaohong 1s reverse;
}

.hello2-enter-active {
  animation: xiaohong 1s linear;
}

.hello2-leave-active {
  animation: xiaohong 1s reverse;
}

@keyframes xiaohong {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>