// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";
// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: false, title: '新闻'}
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: false, title: '消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            // detail后面的两个为之后的传参占个位
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {title: '详情'},
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props: {
                            //     a: 1,
                            //     b: 'hello'
                            // }

                            // props的第二种写法，值为布尔值，若布尔值为真，则会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props: true

                            // props的第三种写法，值为函数，
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫：初始化的时候被调用以及每次路由切换之前自动调用
router.beforeEach((to, from, next) => {
    console.log(to, from, next)
    document.title = to.meta.title
    if (to.meta.isAuth) {  // 判断是否需要鉴权
        if (localStorage.getItem('name') === 'xiaohong') {
            next() //放行，接着往下走
        } else {
            alert('名字有误，没有权限查看！')
        }
    } else {
        next()
    }

})

// 后置路由守卫，初始化时被调用，路由切换后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || '系统'
})

export default router