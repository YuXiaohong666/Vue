import Vue from 'vue'

import App from './App.vue'


// 可以实现让所有组件都看到这个属性，但不推荐
// window.x = {a: 1, b: 2}


// const Demo = Vue.extend({})
// const d = new Demo()
// 将属性放在Vue的原型对象上，可以让所有组件看到
new Vue({
    el: '#app',
    render: h => h(App)
})