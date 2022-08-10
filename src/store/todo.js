import axios from 'axios'

export default {
    state: {
        isFormChangeTaskOpen: false,
        isAlertOpen: false,
        textAlert: '',
        isDarkTheme: false,
        activeTaskNav: {
            name: 'allTasks',
            value: 'Все задачи',
            isActive: true,
            count: '',
        },
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
        isZeroTasks: {
            isAllTasksZero: false,
            isActiveTasksZero: false,
            isDoneTasksZero: false,
            isSearchTasksZero: false
        },
        searchInputValue: ''
    },
    mutations: {
        // Запись содержимого поиска задачь
        SAVE_SEARCH_INPUT_VALUE(state, text) {
            state.searchInputValue = text
        },
        // Переключение темной/светлой темы
        TOGGLE_IS_DARK_THEME(state) {
            state.isDarkTheme = !state.isDarkTheme
        },
        // Открытие формы добавления задачи
        TOGGLE_IS_FORM_CHANGE_TASK_OPEN(state) {
            state.isFormChangeTaskOpen = !state.isFormChangeTaskOpen
        },
        // Открытие/закрытие alert
        TOGGLE_IS_ALERT_OPEN(state, textAlert) {
            state.isAlertOpen = !state.isAlertOpen
            state.textAlert = textAlert
        },
        // Получение всех задач с сервера
        GET_ALL_TASKS(state, response) {
            state.tasks = response.data.reverse()
            state.tasksSandBox = state.tasks
        },
        // Удаление задачи
        DELETE_TASK(state, task) {
            state.tasks = state.tasks.filter((item) => item !== task)
            state.tasksSandBox = state.tasks
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
            state.tasks.find((item) => item.id === task.id).checkbox = !task.checkbox
        },
        // Изменение статуса задачи
        CHANGE_TASK_TEXT(state, task) {
            state.tasks.find((item) => item.id === task.id).taskTitle = task.taskTitle
        },
        // Добавление новой задачи
        ADD_NEW_TASK(state, newTask) {
            state.tasks.unshift(newTask)
            state.tasksSandBox = state.tasks
        },
        // Фильтрация задач
        FILTER_TASKS(state, activeTaskNav) {
            function resetIsZeroStatuses(){
                // Обнуляем статусы отсутствующих задач 
                for (let key in state.isZeroTasks) {
                    state.isZeroTasks[key] = false
                }
            }
            // Фиксируем активный элемент навигации
            state.activeTaskNav = activeTaskNav
            // Удаляем активный статус у всех элементов навигации по задачам
            state.tasksNav.forEach(element => {
                element.isActive = false
            })
            // Присваиваем активный статус активному элементу навигации
            state.tasksNav.find((item) => item.name === activeTaskNav.name).isActive = true
            // Перезаписываем массив песочницу
            state.tasksSandBox = state.tasks
            // Обнуляем статусы отсутствующих задач 
            resetIsZeroStatuses()
            // Если выбрано 'Все задачи'
            if (activeTaskNav.name === 'allTasks') {
                if (state.tasksSandBox.length === 0) {
                    // Обозначаем положительный статус отсутствия всех задач
                    state.isZeroTasks.isAllTasksZero = true
                }
            }
            // Если выбрано 'Активные задачи'
            if (activeTaskNav.name === 'activeTasks') {
                // Находим и удаляем активные задачи из песочницы
                state.tasksSandBox = state.tasksSandBox.filter((item) => item.checkbox === false)
                if (state.tasksSandBox.length === 0) {
                    // Обозначаем положительный статус отсутствия активных задач
                    state.isZeroTasks.isActiveTasksZero = true
                }
            }
            // Если выбрано 'Завершенные задачи'
            if (activeTaskNav.name === 'doneTasks') {
                // Находим и удаляем завершенные задачи из песочницы
                state.tasksSandBox = state.tasksSandBox.filter((item) => item.checkbox === true)
                if (state.tasksSandBox.length === 0) {
                    // Обозначаем положительный статус отсутствия завершенных задач
                    state.isZeroTasks.isDoneTasksZero = true
                }
            }
            if (state.searchInputValue.length !== 0 && state.tasksSandBox.length === 0) {
                // Обнуляем статусы отсутствующих задач 
                resetIsZeroStatuses()
                state.isZeroTasks.isSearchTasksZero = true
            }
        },
        // Поиск по тексту задачи
        GET_TASKS_BY_TEXT(state, response) {
            state.tasks = response.data.reverse()
            // console.log('state.tasks', state.tasks)
            state.tasksSandBox = state.tasks
            // Обнуляем статусы отсутствующих задач 
            for (let key in state.isZeroTasks) {
                state.isZeroTasks[key] = false
            }
            if (!state.tasks.length) {
                state.isZeroTasks.isSearchTasksZero = true
            }
        },
    },
    actions: {
        // Запись содержимого поиска задачь
        SAVE_SEARCH_INPUT_VALUE({ commit }, text) {
            commit('SAVE_SEARCH_INPUT_VALUE', text)
        },
        // Переключение темной/светлой темы
        TOGGLE_IS_DARK_THEME({ commit }) {
            commit('TOGGLE_IS_DARK_THEME')
        },
        // Открытие формы добавления задачи
        TOGGLE_IS_FORM_CHANGE_TASK_OPEN({ commit }) {
            commit('TOGGLE_IS_FORM_CHANGE_TASK_OPEN')
        },
        // Открытие/закрытие alert
        TOGGLE_IS_ALERT_OPEN({ commit }, textAlert) {
            commit('TOGGLE_IS_ALERT_OPEN', textAlert)
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
        // Изменение текста задачи
        async CHANGE_TASK_TEXT({ commit }, task) {
            commit('CHANGE_TASK_TEXT', task)
            await axios.patch(`http://localhost:3000/tasks/${task.id}`, {
                taskTitle: task.taskTitle,
            })
        },
        // Добавление новой задачи
        async ADD_NEW_TASK({ commit }, newTask) {
            commit('ADD_NEW_TASK', newTask)
            await axios.post('http://localhost:3000/tasks', newTask)
        },
        // Фильтрация задач
        FILTER_TASKS({ commit }, activeTaskNav) {
            commit('FILTER_TASKS', activeTaskNav)
        },
        // Поиск по тексту задачи
        async GET_TASKS_BY_TEXT({ commit }, text) {
            const response = await axios.get(`http://localhost:3000/tasks?taskTitle_like=${text}`)
            commit('GET_TASKS_BY_TEXT', response)
        }
    },
    getters: {
        // Состояние темы
        IS_DARK_THEME(state) {
            return state.isDarkTheme
        },
        // Состояние формы добавления темы
        IS_FORM_CHANGE_TASK_OPEN(state) {
            return state.isFormChangeTaskOpen
        },
        // Массив со всеми задачами
        TASKS(state) {
            return state.tasks
        },
        TASKS_SANDBOX(state) {
            return state.tasksSandBox
        },
        // Массив с навигацией по задачам
        TASKSNAV(state) {
            return state.tasksNav
        },
        // Активный элемент навигации по задачам
        ACTIVE_TASK_NAV(state) {
            return state.activeTaskNav
        },
        // Текст уведомления (ALERT)
        TEXT_ALERT(state) {
            return state.textAlert
        },
        // Статусы наличия задач
        IS_ZERO_TASKS(state) {
            return state.isZeroTasks
        },
        // Содержимое поля ввода поиска задач
        SEARCH_INPUT_VALUE(state) {
            return state.searchInputValue
        }
    },
}