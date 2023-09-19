<template>
  <div v-show="total" class="todo-footer">
    <label>
      <input :checked="isAll" type="checkbox" @change="checkAll"/>
    </label>
    <span>
          <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    isAll() {
      return this.doneTotal === this.total && this.total > 0
    },
    total() {
      return this.todos.length
    },
    doneTotal() {
      // let i = 0
      // this.todos.forEach((todo) => {
      //   if (todo.done) i++
      // })
      // return i
      // reduce函数：数组的长度是多少函数就被调用几次，pre是当前传进来的数值，函数每执行完一次，返回值就作为下一次函数执行的pre的值，current是本次函数执行时传进来的todo的项
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    }

  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked)
    },
    clearAll() {
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>