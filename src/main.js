// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
// Import the vue router
import VueRouter from "vue-router"
// Import the vue resource
import VueResource from "vue-resource"
// Import the vue fire
import VueFire from "vuefire"

var VueTruncate = require('vue-truncate-filter')
// Tell vue to use the vue router
Vue.use(VueRouter)
// Tell vue to use the resource
Vue.use(VueResource)
// Tell vue to use the vue fire
Vue.use(VueFire)
// Tell vue to use the vue truncate
Vue.use(VueTruncate)

import Home from './components/Home'

const routes= [
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: "history"
})



//instatinat the vue instance
new Vue({
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  // Pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app
