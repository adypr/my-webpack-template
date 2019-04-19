import Vue from 'vue'
import Vuex from 'vuex' //alias isn't necessary
import example from './example'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example, //declare own modules
    }
})