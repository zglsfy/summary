import Vue from 'vue'
import Home from '../../views/home'
import About from '../../views/about'
import Child from '../../views/child'
class VueRouter {
    constructor (options) {
        this.$options = options
        this.routeMap = {} // 存放路由和组件的对应关系，key为路由，value为组件
    
        // 路由响应，挂在倒vue实例，实现数据的实时监听响应
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
        // this.app = {
        //     current: '/'
        // }
    }

    

    init () {
        this.listenRouterChange() // 监听url的变化
        this.createRouteMap(this.$options) // 实现路由与组件的映射关系
        this.initComponent() // 实现组件
    }

    listenRouterChange () {
        window.addEventListener('laod', this.onHashChange.bind(this))
        window.addEventListener('hashchange', this.onHashChange.bind(this))
    }
    
    onHashChange () {
        this.app.current = window.location.hash.slice(1) || '/'
    }

   
    createRouteMap (options) {
        let routes = options.routes || options.children
        routes.forEach(item => {
            if (item.children) {
                this.createRouteMap(item)
            }
            this.routeMap[item.path] = item.component
        })
        console.log(this.routeMap)
    }

    initComponent () {
        // 提供<router-link>组件
        Vue.component("router-link", {
            props: {to: String},
            render (h) {
                return h ('a', {attrs: {href: '#' + this.to}}, [
                    this.$slots.default
                ])
            }
        })

        // 提供<router-view/>组件
        Vue.component("router-view", {
            render: h => {
                const comp = this.routeMap[this.app.current]
                return h(comp)
            }
        })
    }

}

// vue-router是vue的插件，因此需要通过install的方式提供入口
VueRouter.install = function (vue) {
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router //在项目main.js初始化vue实例时，添加了router和vuex的属性
                this.$options.router.init()
            }
        },
    })
}

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path: '/', component: Home, children:[{path: '/child', component: Child}]}, {path: '/about', component: About}
    ]
})