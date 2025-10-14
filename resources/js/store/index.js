import vue from 'vue'
import Vuex from 'vuex'
import Person from './modules/person'

vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Person
    }
})
