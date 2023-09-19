<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" :todos="todos"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from "@/components/MyHeader.vue";
import MyList from "@/components/MyList.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: {MyFooter, MyList, MyHeader},
  data() {
    return {
      // 加上空数组是因为null属性没有长度，MyFooter组件会报错，所以加上一个空数组的条件
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      console.log('我是App组件，我收到了数据：', todoObj)
      this.todos.unshift(todoObj)
    },
    // 勾选或者取消勾选一个todo
    checkedTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    // 删除一个todo
    // 第一个参数用不到，用下划线占个位
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    // 全选or全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      // 因为监视默认只监视数组是否发生变化，而不会监视到内部属性的变化，所以勾选框的状态不会被同步更新，加上deep深度监视就可以保证勾选状态的实时存储
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkedTodo)
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    pubsub.unsubscribe(this.pubId)
  },
  comments: {MyHeader, MyList, MyFooter}
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>