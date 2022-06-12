import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
   state: {
      isDarkTheme: false,
      tasks: [],
   },
   mutations: {
      TOGGLE_IS_DARK_THEME(state) {
         state.isDarkTheme = !state.isDarkTheme
      },
      GET_ALL_TASKS(state, response) {
         state.tasks = response.data
      },
   },
   actions: {
      TOGGLE_IS_DARK_THEME({ commit }) {
         commit('TOGGLE_IS_DARK_THEME')
      },
      async GET_ALL_TASKS({ commit }) {
         const response = await axios.get(
            'http://localhost:3000/tasks'
         )
         commit('GET_ALL_TASKS', response)
         return response
      },
   },
   getters: {
      IS_DARK_THEME(state) {
         return state.isDarkTheme
      },
      TASKS(state){
         return state.tasks
      }
   },
   modules: {},
})
