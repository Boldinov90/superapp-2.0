<template>
   <div class="wrapper">
      <div class="todo animate__animated animate__fadeIn">
         <div class="todo__content content">
            <ToDoFilterNav class="content__navigation navigation">
               <div class="navigation__sidebar sidebar">
                  <div class="sidebar__input-group">
                     <MyTextArea
                        class="navigation__text-area"
                        :textPlaceholder="'Введите текст новой задачи'"
                        v-model="newTaskTitle"
                        @keydown.enter="addNewTask"
                     />
                     <MyButton
                        :valueBtn="'Добавить новую задачу'"
                        class="navigation__btn"
                        @click="addNewTask"
                     />
                  </div>
                  <MyButton
                     :valueBtn="'Сделать все задачи активными'"
                     class="navigation__btn"
                     @click="makeAllTasksActiveOrDone(false, ACTIVE_TASK_NAV)"
                  />
                  <MyButton
                     :valueBtn="'Завершить все задачи'"
                     class="navigation__btn"
                     @click="makeAllTasksActiveOrDone(true, ACTIVE_TASK_NAV)"
                  />
                  <MyButton
                     :valueBtn="'Удалить завершенные задачи'"
                     class="navigation__btn"
                     @click="delAllDoneTasks"
                     
                  />
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
                  class="form__input"
                  :textPlaceholder="'Введите текст задачи'"
                  v-model="changeTaskTitle"
               />
               <div class="form__btns">
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
         activeTask: {},
         alertTitle: '',
      }
   },
   computed: {
      ...mapGetters([
         'IS_DARK_THEME',
         'IS_FORM_CHANGE_TASK_OPEN',
         'ACTIVE_TASK',
         'TASKS',
         'TEXT_ALERT',
         'ACTIVE_TASK_NAV'
      ]),
   },
   methods: {
      ...mapActions([
         'ADD_NEW_TASK',
         'TOGGLE_IS_FORM_CHANGE_TASK_OPEN',
         'COUNT_TASKS',
         'CHANGE_TASK_TEXT',
         'TOGGLE_IS_ALERT_OPEN',
         'MAKE_ALL_TASKS_ACTIVE_OR_DONE',
         'DELETE_TASK',
         'FILTER_TASKS'
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
      // Сделать все задачи активными или завершенными
      makeAllTasksActiveOrDone(boolean, activeTaskNav) {
         const data = {
            tasks: this.TASKS,
            boolean: boolean,
         }
         // Сделать все задачи активными или завершенными
         this.MAKE_ALL_TASKS_ACTIVE_OR_DONE(data)
         // Обновление счетчиков задач
         this.COUNT_TASKS()
         this.FILTER_TASKS(activeTaskNav)
      },
      // Удаление всех завершенных задач
      delAllDoneTasks() {
         this.TASKS.forEach((element) => {
            if (element.checkbox) {
               this.DELETE_TASK(element)
            }
         })
         // Обновление счетчиков задач
         this.COUNT_TASKS()
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
         .content__navigation {
            .navigation__sidebar {
               margin-top: 50px;
               display: flex;
               flex-direction: column;
               .sidebar__input-group {
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 20px;
                  .navigation__text-area {
                     margin-bottom: 10px;
                  }
               }
               .navigation__btn {
                  margin-bottom: 7px;
                  background-color: $accent-color;
                  color: $text-button-color;
               }
            }
         }
         .content__todo-list {
            margin-left: 250px;
         }
         .content__form-change-task {
            animation-duration: 0.2s;
            .form__btns {
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
