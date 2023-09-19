<template>
  <div>
    <button @click="isShow=!isShow">显示\隐藏</button>
    <!--    当transition标签下有多个元素时，需要使用transition-group，且里面每个元素标签都要有单独的key值。或者里面用div包裹起来-->
    <transition-group appear name="hello">
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
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
  transition: 1s linear;
}

/*进入的起点 离开的终点*/
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}

/*进入的终点 离开的起点*/
.hello-enter-to, .hello-leave {
  transform: translateX(0);
}
</style>