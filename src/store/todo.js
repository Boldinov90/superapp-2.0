import axios from 'axios'

export default {
   state: {
      isFormAddTaskOpen: false,
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
      // Открытие формы добавления задачи
      TOGGLE_IS_FORM_ADD_TASK_OPEN(state) {
         state.isFormAddTaskOpen = !state.isFormAddTaskOpen
      },
      // Получение всех задач с сервера
      GET_ALL_TASKS(state, response) {
         state.tasks = response.data
      },
      // Удаление задачи
      DELETE_TASK(state, task) {
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
      // Изменение статуса задачи
      CHANGE_TASK_STATUS(state, task) {
         state.tasks.find((item) => item.id === task.id).checkbox =
            !task.checkbox
      },
      ADD_NEW_TASK(state) {},
   },
   actions: {
      // Переключение темной/светлой темы
      TOGGLE_IS_DARK_THEME({ commit }) {
         commit('TOGGLE_IS_DARK_THEME')
      },
      // Открытие формы добавления задачи
      TOGGLE_IS_FORM_ADD_TASK_OPEN({ commit }) {
         commit('TOGGLE_IS_FORM_ADD_TASK_OPEN')
      },
      // Получение всех задач с сервера
      async GET_ALL_TASKS({ commit }) {
         const response = await axios.get('http://localhost:3000/tasks')
         commit('GET_ALL_TASKS', response)
         return response
      },
      // Удаление задачи
      async DELETE_TASK({ commit }, task) {
         commit('DELETE_TASK', task)
         await axios.delete(`http://localhost:3000/tasks/${task.id}`)
      },
      // Счетчик задач
      COUNT_TASKS({ commit }) {
         commit('COUNT_TASKS')
      },
      // Изменение статуса задачи
      async CHANGE_TASK_STATUS({ commit }, task) {
         commit('CHANGE_TASK_STATUS', task)
         await axios.patch(`http://localhost:3000/tasks/${task.id}`, {
            checkbox: task.checkbox,
         })
      },
   },
   getters: {
      // Состояние темы
      IS_DARK_THEME(state) {
         return state.isDarkTheme
      },
      // Состояние формы добавления темы
      IS_FORM_ADD_TASK_OPEN(state) {
         return state.isFormAddTaskOpen
      },

      // Массив со всеми задачами
      TASKS(state) {
         return state.tasks
      },
      // Массив с навигацией по задачам
      TASKSNAV(state) {
         return state.tasksNav
      },
   },
}
