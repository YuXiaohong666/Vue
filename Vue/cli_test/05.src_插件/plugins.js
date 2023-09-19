export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 全局指令
        Vue.directive('fbind2', {
            // 当指令与元素成功绑定时调用
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面的时候调用
            inserted(element) {
                element.focus()
            },
            // 指令所在的模板被重新解析时调用
            update(element, binding) {
                element.value = binding.value
            }
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    name: '小红',
                    sex: '男'
                }
            }
        })
        // 给原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = () => {
            alert('你好')
        }
    }

}