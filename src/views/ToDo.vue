<template>
   <div class="wrapper">
      <div class="todo animate__animated animate__fadeIn">
         <div class="todo__content content">
            <ToDoFilterNav class="content__navigation navigation">
               <div class="navigation__buttons">
                  <MyButton
                     :valueBtn="'Добавить новую задачу'"
                     class="navigation__btn"
                     @click="openFormAddTask"
                  />
                  <MyButton
                     :valueBtn="'Удалить завершенные задачи'"
                     class="navigation__btn"
                  />
               </div>
            </ToDoFilterNav>
            <ToDoList class="content__todo-list" />
            <MyForm
               :formTitle="'Новая задача'"
               class="content__form form"
               v-if="IS_FORM_ADD_TASK_OPEN"
               @submit.prevent
            >
               <MyFormInput
                  class="form__input"
                  :textPlaceholder="'Введите текст новой задачи'"
               />
               <div class="form__btns">
                  <MyButton :valueBtn="'Добавить'" class="btn" />
                  <MyButton :valueBtn="'Отмена'" class="btn" @click.prevent="openFormAddTask"/>
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

export default {
   components: { ToDoFilterNav, ToDoList, MyForm, MyFormInput, MyButton },
   data() {
      return {}
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME', 'IS_FORM_ADD_TASK_OPEN']),
   },
   methods: {
      ...mapActions(['TOGGLE_IS_FORM_ADD_TASK_OPEN']),
      openFormAddTask() {
         this.TOGGLE_IS_FORM_ADD_TASK_OPEN()
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
            // margin-right: 20px;
            .navigation__buttons {
               margin-top: 50px;
               // padding-right: 40px;
               display: flex;
               flex-direction: column;
               .navigation__btn {
                  margin-bottom: 10px;
                  background-color: $accent-color;
                  color: $text-button-color;
               }
            }
         }
         .content__todo-list {
            margin-left: 250px;
         }
         .content__form {
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
