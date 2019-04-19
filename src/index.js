import './js/common.js'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue') //activation Vue
import store from './store'

//registration component: 1 - component name, 2 - source
Vue.component('example-component', require('./components/Example.vue').default)

//initialize Vue
const app = new Vue({
    store, //ES sintax, when value as key
    el: '#app' //element for initialization
})