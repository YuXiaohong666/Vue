// 该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import {nanoid} from "nanoid";

// 使用插件，必须写在该文件中，否则会因执行顺序而报错
Vue.use(Vuex)

// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
            console.log('mutations被调用了')
        },
        JIAN(state, value) {
            state.sum -= value
            console.log('mutations被调用了')
        },
    },
    state: {
        sum: 0,  //当前的和:
        school: 'GEO',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

// 人员管理相关的配置

const personOptions = {
    // 模块化编码必须加上下面这行代码
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('api.ulxsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
            console.log('mutations中的ADD_PERSON被调用了')
        }
    },
    state: {
        personList: [
            {id: '001', name: '小红'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})
