<template>
  <div class="todo-header">
    <input v-model="title" placeholder="请输入你的任务名称，按回车键确认" type="text" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyHeader",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add(e) {
      // 校验数据：防止输入空事件
      if (!this.title) return alert('输入不能为空')
      // 将用户的输入包装成为一个todo对象
      const todoObj = {
        id: nanoid(),
        title: e.target.value,
        done: false
      }
      // 通知App组件添加一个todo对象
      console.log(e.target.value)
      this.$emit('addTodo', todoObj)
      // 添加完之后让搜索框清空
      this.title = ''
    }
  },

}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>