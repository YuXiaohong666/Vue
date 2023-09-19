<template>
  <li>
    <label>
      <!--      change属性：发生变化时调用-->
      <input :checked="todo.done  " type="checkbox" @change="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ['todo'],
  methods: {
    // 勾选
    handleCheck(id) {
      // this.checkedTodo(id),
      this.$bus.$emit('checkTod', id)
    },
    // 删除
    handledelete(id) {
      if (confirm('确定删除吗')) {
        // 通知App删除对应项
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }

    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #cccccc;
}

li:hover button {
  display: block;
}
</style>