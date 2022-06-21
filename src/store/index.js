import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
   state: {
      isDarkTheme: false,
      tasks: [],
      tasksSandBox: [],
      tasksNav: [
         {
            name: 'allTasks',
            value: 'Все задачи',
            isActive: true,
            count: '',
         },
         {
            name: 'activeTasks',
            value: 'Активные задачи',
            isActive: '',
            count: '',
         },
         {
            name: 'doneTasks',
            value: 'Завершенные',
            isActive: '',
            count: '',
         },
      ],
   },
   mutations: {
      // Переключение темной/светлой темы
      TOGGLE_IS_DARK_THEME(state) {
         state.isDarkTheme = !state.isDarkTheme
      },
      // Получение всех задач с сервера
      GET_ALL_TASKS(state, response) {
         state.tasks = response.data
      },
      // Удаление задачи
      DELETE_TASK_FROM_STATE(state, task) {
         state.tasks = state.tasks.filter((item) => item !== task)
      },
      // Счетчик задач
      COUNT_TASKS(state) {
         state.tasksNav.forEach((item) => {
            let arr = state.tasks
            if (item.name === 'allTasks') {
               item.count = state.tasks.length
            }
            if (item.name === 'activeTasks') {
               item.count = arr.filter((item) => item.checkbox !== true).length
            }
            if (item.name === 'doneTasks') {
               item.count = arr.filter((item) => item.checkbox !== false).length
            }
         })
      },
   },
   actions: {
      TOGGLE_IS_DARK_THEME({ commit }) {
         commit('TOGGLE_IS_DARK_THEME')
      },
      async GET_ALL_TASKS({ commit }) {
         const response = await axios.get('http://localhost:3000/tasks')
         commit('GET_ALL_TASKS', response)
         return response
      },
      async DELETE_TASK_FROM_STATE({ commit }, task) {
         commit('DELETE_TASK_FROM_STATE', task)
         await axios.delete(`http://localhost:3000/tasks/${task.id}`)
      },
      COUNT_TASKS({ commit }) {
         commit('COUNT_TASKS')
      },
   },
   getters: {
      IS_DARK_THEME(state) {
         return state.isDarkTheme
      },
      TASKS(state) {
         return state.tasks
      },
      TASKSNAV(state) {
         return state.tasksNav
      },
   },
   modules: {},
})
