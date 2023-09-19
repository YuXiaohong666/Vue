<template>
  <div>
    <h1>当前和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <h3 style="background-color: orange">人员列表的总人数是：{{ personList.length }}</h3>

    <!--    或者可以在v-model的后面加上强转数字的修饰符-->
    <select v-model.number="n">
      <!--      必须在value前面加上冒号，这样会将引号内的内容当做js表达式去解析，也就是纯数字-->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "CounT",
  data() {
    return {
      n: 1  //用户选择的数字
    }
  },
  computed: {
    // 借助mapStatic生成计算属性，从state中读取数据（数组写法）
    ...mapState('countOptions', ['sum', 'school', 'subject']),
    ...mapState('personOptions', ['personList']),

    // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters('countOptions', ['bigSum'])
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations('countOptions', {increment: 'JIA', decrement: 'JIAN'}),

    // 借助mapActions生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapActions('countOptions', {incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})

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