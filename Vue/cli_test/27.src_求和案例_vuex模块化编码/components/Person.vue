<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="background-color: orange">Count组件的求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input v-model="name" placeholder="请输入名字" type="text">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "PersoN",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name
      }
      this.$store.commit('personOptions/ADD_PERSON', personObj)
      this.name = ''
    },
    addWang() {
      const personObj = {
        id: nanoid(),
        name: this.name
      }
      this.$store.dispatch('personOptions/addPersonWang', personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personOptions/addPersonServer')
    }
  },
  computed: {
    personList() {
      return this.$store.state.personOptions.personList
    },
    sum() {
      return this.$store.state.countOptions.sum
    },
    firstPersonName() {
      return this.$store.getters['personOptions/firstPersonName']
    }
  }
}
</script>

<style scoped>

</style>