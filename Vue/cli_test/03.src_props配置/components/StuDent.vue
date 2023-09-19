<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "StuDent",
  data() {
    return {
      msg: '一起学习Vue',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      // 不能修改传过来的参数的值，会报错
      // this.age = 22
      this.myAge++
    }
  },
  // 简单声明接收
  // props: ['name', 'sex', 'age']

  // 接收的同时对数据的类型进行限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,     //name的类型是字符串
      required: true    //name是必要的，如果不传参就会报错
    },
    age: {
      type: Number,
      default: 99       //如果不传参，默认值为99
    },
    sex: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>