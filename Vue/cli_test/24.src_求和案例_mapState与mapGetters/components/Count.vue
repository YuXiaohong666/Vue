<template>
  <div>
    <h1>当前和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>

    <!--    或者可以在v-model的后面加上强转数字的修饰符-->
    <select v-model.number="n">
      <!--      必须在value前面加上冒号，这样会将引号内的内容当做js表达式去解析，也就是纯数字-->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "CounT",
  data() {
    return {

      n: 1  //用户选择的数字
    }
  },
  computed: {
    // 靠程序员亲自去屑计算属性：
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    // 借助mapStatic生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
    // 借助mapStatic生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    // *******************************************************
    // bigSum() {
    //   return this.$store.getters.bigSum
    // }

    // 借助mapStatic生成计算属性，从state中读取数据（对象写法）
    // ...mapGetters({bigSum: 'bigSum'})

    // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters((['bigSum']))
  },
  methods: {
    // 因为increment和decrement没有做业务逻辑，直接提交给mutaitions进行处理就可以了，所以用commit
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
  mounted() {
    const x = mapState({sum: 'sum', school: 'school', subject: 'subject'})
    console.log(x)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>