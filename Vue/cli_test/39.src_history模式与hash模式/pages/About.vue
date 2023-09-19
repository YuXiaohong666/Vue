<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "AbouT",
  beforeDestroy() {
    console.log('About组件即将被销毁')
  },
  mounted() {
    console.log('About组件挂载完毕了')
  },
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next)
    document.title = to.meta.title
    if (to.meta.isAuth) {  // 判断是否需要鉴权
      if (localStorage.getItem('name') === 'xiaohong') {
        next() //放行，接着往下走
      } else {
        alert('名字有误，没有权限查看！')
      }
    } else {
      next()
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    next()
  }
}
</script>

<style scoped>

</style>