// 该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vuex from "vuex";
import Vue from "vue";

// 使用插件，必须写在该文件中，否则会因执行顺序而报错
Vue.use(Vuex)
// 准备actions，用于响应组件里面的动作，所有的业务逻辑都要写在actions中不能卸载mutations中
// 另外没有业务逻辑的就不用在actions中写了，直接传给mutations去处理
const actions = {
    // jia(context, value) {
    //     context.commit('JIA', value)
    //     console.log('actions被调用了')
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    //     console.log('actions被调用了')
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
        console.log('actions被调用了')
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
        console.log('actions被调用了')
    }
}

// 准备mutations，用于加工数据
const mutations = {
    JIA(state, value) {
        state.sum += value
        console.log('mutations被调用了')
    },
    JIAN(state, value) {
        state.sum -= value
        console.log('mutations被调用了')
    }
}

// 准备state，用于存储数据
const state = {
    sum: 0,  //当前的和:
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
