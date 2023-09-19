const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }

    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                // 路径重写，下面这行代码代表去掉api这个路径
                pathRewrite: {'^/api': ''},
                // websocket客户端和服务器的一种通信方式，用于支持websocket
                ws: true,
                // 用于控制请求头中的host值
                changeOrigin: true
            },
            '/demo': {
                target: 'http://localhost:5001',
                // 路径重写，下面这行代码代表去掉demo这个路径
                pathRewrite: {'^/demo': ''},
                // websocket客户端和服务器的一种通信方式，用于支持websocket
                ws: true,
                // 用于控制请求头中的host值
                changeOrigin: true
            }
        }
    }
})
