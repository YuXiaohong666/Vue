<template>
  <transition appear name="todo">
    <li>
      <label>
        <!--      change属性：发生变化时调用-->
        <input :checked="todo.done  " type="checkbox" @change="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input v-show="todo.isEdit"
               ref="inputTitle"
               :value="todo.title"
               type="text"
               @blur="handleBlur(todo,$event)">
      </label>
      <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
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
    },
    // 编辑
    handleEdit(todo) {
      // 如果todo身上有isEdit可以直接改
      if (todo.hasOwnProperty.call('isEdit')) {
        console.log('todo身上有isEdit')
        todo.isEdit = true
      } else {
        console.log('todo身上没有isEdit')
        this.$set(todo, 'isEdit', true)
      }
      // 因为Vue会将这个函数执行走完才会去解析模板，而在给输入框获取焦点时，输入框还没有显示在页面上，所以不奏效，可以用延迟定时器解决
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus()
      // }, 200)

      // 官方提供的一个解决方法
      // nextTick中的回调函数会在DOM节点更新之后执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
      // 页面不会实时刷新
      // todo.isEdit = true
    },
    // 失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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

.todo-enter-active {
  animation: xiaohong 0.5s linear;
}

.todo-leave-active {
  animation: xiaohong 0.5s reverse;
}

@keyframes xiaohong {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>