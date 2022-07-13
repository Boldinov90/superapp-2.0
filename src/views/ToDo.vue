<template>
   <div class="wrapper">
      <div class="todo animate__animated animate__fadeIn">
         <div class="todo__content content">
            <ToDoFilterNav class="content__navigation navigation">
               <div class="navigation__buttons">
                  <MyTextArea
                     class="navigation__text-area"
                     :textPlaceholder="'Введите текст новой задачи'"
                     v-model="newTaskTitle"
                  />
                  <MyButton
                     :valueBtn="'Добавить новую задачу'"
                     class="navigation__btn"
                     @click="addNewTask"
                  />
                  <MyButton
                     :valueBtn="'Удалить завершенные задачи'"
                     class="navigation__btn"
                  />
               </div>
            </ToDoFilterNav>
            <ToDoList class="content__todo-list" />
            <MyForm
               :formTitle="'Редактирование'"
               class="content__form-change-task form-change-task animate__animated animate__fadeIn"
               v-if="IS_FORM_CHANGE_TASK_OPEN"
               @submit.prevent
            >
               <MyFormInput
                  class="form__input"
                  :textPlaceholder="'Введите текст задачи'"
                  v-model="ACTIVE_TASK.taskTitle"
               />
               <div class="form__btns">
                  <MyButton
                     :valueBtn="'Обновить'"
                     class="btn"
                     @click.prevent="updateTextTask"
                  />
                  <MyButton
                     :valueBtn="'Отмена'"
                     class="btn"
                     @click.prevent="closeFormChangeTask"
                  />
               </div>
            </MyForm>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import 'animate.css'
import ToDoFilterNav from '../components/todo/ToDoFilterNav.vue'
import ToDoList from '../components/todo/ToDoList.vue'
import MyForm from '../components/UI/MyForm.vue'
import MyFormInput from '../components/UI/MyFormInput.vue'
import MyButton from '../components/UI/MyButton.vue'
import MyTextArea from '../components/UI/MyTextArea.vue'

export default {
   components: {
      ToDoFilterNav,
      ToDoList,
      MyForm,
      MyFormInput,
      MyButton,
      MyTextArea,
   },
   data() {
      return {
         newTaskTitle: '',
         changeTaskTitle: ''
      }
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME', 'IS_FORM_CHANGE_TASK_OPEN', 'ACTIVE_TASK']),
   },
   methods: {
      ...mapActions([ 'ADD_NEW_TASK', 'TOGGLE_IS_FORM_CHANGE_TASK_OPEN', 'COUNT_TASKS']),
      closeFormChangeTask() {
         this.TOGGLE_IS_FORM_CHANGE_TASK_OPEN()
         // this.changeTaskTitle = this.ACTIVE_TASK.taskTitle
      },
      addNewTask() {
         let newTask = {
            id: new Date().valueOf(),
            taskTitle: this.newTaskTitle,
            checkbox: false,
         }
         this.ADD_NEW_TASK(newTask)
         // Обновление счетчиков задач
         this.COUNT_TASKS()
         this.newTaskTitle = ''
      },
      updateTextTask(){
         console.log(this.ACTIVE_TASK)
         // this.changeTaskTitle = this.ACTIVE_TASK.taskTitle
      }
   },
   // watch: {
   //    $store.state.ACTIVE_TASK.taskTitle
   // }
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
            .navigation__buttons {
               .navigation__text-area{
                  margin-bottom: 10px;
               }
               margin-top: 50px;
               display: flex;
               flex-direction: column;
               .navigation__btn {
                  margin-bottom: 10px;
                  background-color: $accent-color;
                  color: $text-button-color;
               }
            }
         }
         // .content__add-new-tasks {
         //    // width: 100%;
         //    // margin: 0;

         //    display: grid;
         //    grid-template-columns: 5fr 1fr;
         //    align-items: center;
         //    // justify-content: space-between;
         //    margin-left: 230px;
         //    position: fixed;
         //    // left: 250px;
         //    // right: 0;
         //    background-color: $background-color-container;
         //    .add-new-tasks__input{
         //       padding: 7px 20px;
         //    }
         //    .add-new-tasks__btn{
         //       // height: 100%;
         //       background-color: $accent-color;
         //       color: $text-button-color;
         //       margin-left: 20px;
         //    }
         // }
         .content__todo-list {
            margin-left: 250px;
            // margin-top: 60px;
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
