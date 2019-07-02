let Vue

class Store {
    constructor (options) {
        this.state = new Vue({
            data: options.state
        })

        this.mutations = options.mutations
        this.actions = options.actions
        options.getters && this.handlGetters(options.getters)
    }

    commit = (type, arg) => {
        console.log(type)
        this.mutations[type](this.state, arg)
    }

    dispatch (type, arg) {
        this.actions[type]({commit: this.commit, state: this.state}, arg)
    }

    handlGetters (getters) {
        this.getters = {}
        Object.keys(getters).forEach(key => {
            // 属性只读
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state)
                }
            })
        })
    }
}


// vuex作为插件挂载到vue原型上
function install (_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default { Store, install }