// 当两个组件有共同的代码时，可以使用mixin属性，来共享这些代码

export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    }
}

export const mixin2 = {
    data() {
        return {
            name: '小红',
            sex: '男'
        }
    }
}