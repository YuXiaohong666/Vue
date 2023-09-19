import Vue from 'vue'

import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App),
    // 3秒后自动销毁vm
    // mounted() {
    //     setTimeout(() => {
    //         this.$destroy()
    //     }, 3000)
    // }
})