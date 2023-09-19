<template>
  <div>
    <ul>
      <li v-for="p in messageList" :key="p.id">
        <!--        跳转路由并携带params参数，to的字符串写法-->
        <!--        <router-link :to="`/home/message/detail/${p.id}/${p.title}`">{{ p.title }}</router-link>&nbsp;&nbsp;-->

        <!--        跳转路由并携带query参数，to的对象写法，必须用name属性，不能用path-->
        <router-link :to="{
                  name:'xiangqing',
                  query:{
                    id:p.id,
                    title:p.title
                  }
                }">
          {{ p.title }}
        </router-link>&nbsp;&nbsp;-->
        <button @click="pushShow(p)">push查看</button>
        <button @click="replaceShow(p)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MessagE",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'}
      ]
    }
  },
  methods: {
    pushShow(p) {
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: p.id,
          title: p.title
        }
      })
    },
    replaceShow(p) {
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: p.id,
          title: p.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>