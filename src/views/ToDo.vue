<template>
   <div class="wrapper">
      <div class="todo animate__animated animate__fadeIn">
         <div class="todo__content content">
            <img
               class="todo-filter-icon"
               src="@/assets/img/filter-menu-icon.svg"
               @click="mobileToDofilterOpenClose"
            />
            <ToDoFilterNav
               class="content__navigation navigation"
               :class="{ 'content__navigation-active': IS_FILTER_MENU_ACTIVE }"
            >
               <div class="navigation__sidebar sidebar">
                  <div class="sidebar__search search">
                     <MyFormInput
                        :textPlaceholder="'Поиск'"
                        class="search__input"
                        v-model="searchInputValue"
                     />
                     <div class="search__btn-clear" @click="clearSearchInput">
                        &#10005;
                     </div>
                  </div>
                  <div class="sidebar__add-new-task add-new-task">
                     <MyTextArea
                        class="add-new-task__text-area"
                        :textPlaceholder="'Введите текст новой задачи'"
                        v-model="newTaskTitle"
                        @keydown.enter="addNewTask"
                     />
                     <MyButton
                        :valueBtn="'Добавить новую задачу'"
                        class="add-new-task__btn btns"
                        @click="addNewTask"
                     />
                  </div>
               </div>
            </ToDoFilterNav>
            <ToDoList class="content__todo-list" @taskFromItem="taskFromItem" />
            <MyForm
               :formTitle="'Редактирование'"
               class="content__form-change-task form-change-task animate__animated animate__fadeIn"
               v-if="IS_FORM_CHANGE_TASK_OPEN"
               @submit.prevent
            >
               <MyFormInput
                  class="form-change-task__input"
                  :textPlaceholder="'Введите текст задачи'"
                  v-model="changeTaskTitle"
               />
               <div class="form-change-task__btns">
                  <MyButton
                     :valueBtn="'Обновить'"
                     class="btn"
                     @click.prevent="updateTextTask(activeTask)"
                  />
                  <MyButton
                     :valueBtn="'Отмена'"
                     class="btn"
                     @click.prevent="closeFormChangeTask()"
                  />
               </div>
            </MyForm>
            <MyAlert
               class="animate__animated animate__fadeIn"
               v-if="TEXT_ALERT"
            />
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import 'animate.css'
import ToDoFilterNav from '../components/todo/ToDoFilterNav.vue'
import ToDoList from '../components/todo/ToDoList.vue'
import ToDoItem from '../components/todo/ToDoItem.vue'
import MyForm from '../components/UI/MyForm.vue'
import MyFormInput from '../components/UI/MyFormInput.vue'
import MyButton from '../components/UI/MyButton.vue'
import MyTextArea from '../components/UI/MyTextArea.vue'
import MyAlert from '../components/UI/MyAlert.vue'

export default {
   components: {
      ToDoFilterNav,
      ToDoList,
      ToDoItem,
      MyForm,
      MyFormInput,
      MyButton,
      MyTextArea,
      MyAlert,
   },
   data() {
      return {
         newTaskTitle: '',
         changeTaskTitle: '',
         searchInputValue: '',
         activeTask: {},
         alertTitle: '',
      }
   },
   computed: {
      ...mapGetters([
         'IS_FORM_CHANGE_TASK_OPEN',
         'TEXT_ALERT',
         'ACTIVE_TASK_NAV',
         'IS_FILTER_MENU_ACTIVE',
      ]),
   },
   methods: {
      ...mapActions([
         'ADD_NEW_TASK',
         'TOGGLE_IS_FORM_CHANGE_TASK_OPEN',
         'COUNT_TASKS',
         'CHANGE_TASK_TEXT',
         'TOGGLE_IS_ALERT_OPEN',
         'FILTER_TASKS',
         'GET_TASKS_BY_TEXT',
         'SAVE_SEARCH_INPUT_VALUE',
         'TOGGLE_IS_FILTER_MENU_ACTIVE',
      ]),
      // Закрытие формы изменения текста задачи
      closeFormChangeTask() {
         // Переключение статуса формы редактирования во VueX
         this.TOGGLE_IS_FORM_CHANGE_TASK_OPEN()
      },
      // Добавление новой задачи
      addNewTask(e) {
         // Отменяем стандартное поведение браузера для отмены принудительного переноса строки
         e.preventDefault()
         // Если в инпуте (textarea) что-то есть
         if (this.newTaskTitle) {
            // Генерация нового объекта с задачей
            let newTask = {
               id: new Date().valueOf(),
               taskTitle: this.newTaskTitle,
               checkbox: false,
            }
            // Добавление новой задачи во vuex и на сервере
            this.ADD_NEW_TASK(newTask)
            // Фильтрация задач
            this.FILTER_TASKS(this.ACTIVE_TASK_NAV)
            // Обновление счетчиков задач
            this.COUNT_TASKS()
            // Очистка инпута
            this.newTaskTitle = ''
            // Иначе
         } else {
            // Открываем алерт и выводим сообщение
            this.TOGGLE_IS_ALERT_OPEN(
               'Задача не может быть пустой! Введите текст новой задачи.',
            )
            // Закрываем алерт после небольшой задержки для лучшей визуализации
            setTimeout(() => {
               this.TOGGLE_IS_ALERT_OPEN()
            }, 2000)
         }
      },
      // Обновление текста задачи
      updateTextTask(activeTask) {
         if (this.changeTaskTitle) {
            // Присвоение обновленного содержимого инпута редактируемой задачи
            activeTask.taskTitle = this.changeTaskTitle
            // Обновление текста задачи во vuex и на сервере
            this.CHANGE_TASK_TEXT(activeTask)
            // Переключение статуса формы редактирования во VueX
            this.TOGGLE_IS_FORM_CHANGE_TASK_OPEN()
         } else {
            // Открываем алерт и выводим сообщение
            this.TOGGLE_IS_ALERT_OPEN(
               'Задача не может быть пустой! Введите текст задачи.',
            )
            // Закрываем алерт после небольшой задержки для лучшей визуализации
            setTimeout(() => {
               this.TOGGLE_IS_ALERT_OPEN()
            }, 2000)
         }
      },
      // Получение активной задачи из дочернего компонента (ToDoItem) через $emit
      taskFromItem(taskFromItem) {
         // Отображение текста задачи с сервера в инпуте
         this.changeTaskTitle = taskFromItem.taskTitle
         // Запись в переменную активной задачи
         this.activeTask = taskFromItem
      },
      // Очистка содержимого поля ввода поиска
      clearSearchInput() {
         this.searchInputValue = ''
      },
      // Открытие/закрытие панели фильтрации задач
      mobileToDofilterOpenClose() {
         this.TOGGLE_IS_FILTER_MENU_ACTIVE()
      },
   },
   watch: {
      // При изменении поля ввода поиска
      async searchInputValue() {
         // Сохранение содержимого поля ввода поиска во Vuex
         await this.SAVE_SEARCH_INPUT_VALUE(this.searchInputValue)
         // Получение задач по введенному тексту поиска
         await this.GET_TASKS_BY_TEXT(this.searchInputValue)
         // Фильтрация адач
         await this.FILTER_TASKS(this.ACTIVE_TASK_NAV)
      },
   },
}
</script>

<style lang="scss" scoped>
.wrapper {
   min-height: 100vh;
   padding: 60px 0;
   .todo {
      .todo__content {
         display: grid;
         grid-template-columns: 1fr;
         @media (max-width: 767px) {
         }
         .todo-filter-icon {
            display: none;
            position: fixed;
            top: 73px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
               transform: scale(1.05);
               transition: 0.3s;
            }
            @media (max-width: 767px) {
               display: block;
            }
         }
         .content__navigation {
            position: fixed;
            transition: 0.3s;
            height: 100vh;
            @media (max-width: 1100px) {
               padding-left: 20px;
               padding-right: 20px;
               left: 0;
            }
            @media (max-width: 767px) {
               left: -100%;
               transition: 0.6s;
            }
            .navigation__sidebar {
               margin-top: 35px;
               .btns {
                  margin-bottom: 7px;
                  background-color: $accent-color;
                  color: $text-button-color;
                  width: 100%;
               }
               .sidebar__search {
                  position: relative;
                  .search__input {
                     margin-bottom: 10px;
                  }
                  .search__btn-clear {
                     position: absolute;
                     top: 20px;
                     right: 10px;
                     cursor: pointer;
                     color: $text-menu-color;
                     transition: 0.2s;
                     &:hover {
                        transform: scale(1.2);
                        transition: 0.2s;
                        color: red;
                     }
                  }
               }
               .sidebar__add-new-task {
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 20px;
                  .add-new-task__text-area {
                     margin-bottom: 10px;
                  }
               }
            }
         }
         .content__navigation-active {
            left: 0;
            transition: 0.3s;
         }
         .content__todo-list {
            margin-left: 260px;
            transition: 0.2s;
            @media (max-width: 767px) {
               margin-left: 50px;
               transition: 0.6s;
            }
         }
         .content__form-change-task {
            animation-duration: 0.2s;
            .form-change-task__btns {
               margin-top: 20px;
               @extend %flexallcenter;
               .btn {
                  background-color: $accent-color;
                  color: $text-button-color;
                  margin-right: 20px;
                  min-width: 90px;
               }
            }
         }
      }
   }
}
</style>
