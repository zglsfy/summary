// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './assets/router/rotuer'
import vuex from './assets/vuex/vuex'
import './assets/css/style.css'
// import SvInput from './components/SvInput'

Vue.config.productionTip = false

// Vue.use(SvInput)

Vue.use(vuex)

// const store = new vuex.Store({
//   state: {
//     a: 1,
//     b: 2
//   },
//   mutations: {
//     changeA (state) {
//       console.log(state.a)
//       state.a ++
//     },
//     changeB (state) {
//       state.b ++
//     }
//   },
//   actions: {
//     asyncChangeB ({commit}) {
//       setTimeout(() => {
//         commit('changeB')
//       }, 1000)
//     }
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
