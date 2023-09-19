<template>
  <div>
    <h1>当前和为{{ sum }}</h1>
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
export default {
  name: "CounT",
  data() {
    return {
      sum: 0,  //当前的和:
      n: 1  //用户选择的数字
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 500)
    },
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>