<template>
   <div class="task-item">
      <input
         :v-model="task.checkbox"
         class="task-item__checkbox"
         type="checkbox"
         :checked="task.checkbox"
         @click="changeTaskStatus(task, ACTIVE_TASK_NAV)"
      />
      <div
         class="task-item__task-title"
         :class="{ 'task-item__task-title-done': task.checkbox }"
      >
         {{ task.taskTitle }}
      </div>
      <MyButton
         :valueBtn="'&#9998;'"
         class="task-item__btn-edit"
         @click="openFormChangeTask(task)"
      />
      <MyButton
         :valueBtn="'&otimes;'"
         class="task-item__btn-remove"
         @click="deleteTask(task)"
      />
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyButton from '../UI/MyButton.vue'
import MyForm from '../UI/MyForm.vue'
import MyFormInput from '../UI/MyFormInput.vue'

export default {
   props: {
      task: Object,
   },
   components: { MyButton, MyForm, MyFormInput },
   computed: {
      ...mapGetters(['ACTIVE_TASK_NAV']),
   },
   methods: {
      ...mapActions([
         'DELETE_TASK',
         'COUNT_TASKS',
         'CHANGE_TASK_STATUS',
         'TOGGLE_IS_FORM_CHANGE_TASK_OPEN',
         'FILTER_TASKS',
      ]),
      // Функция удаления задачи
      deleteTask(task) {
         // Удаление выбранной задачи
         this.DELETE_TASK(task)
         // Фильтрация задач при изменении статуса задачи
         this.FILTER_TASKS(this.ACTIVE_TASK_NAV)
         // Обновление счетчиков задач
         this.COUNT_TASKS()
      },
      // Функция изменения статуса задачи
      changeTaskStatus(task, activeTaskNav) {
         // Изменение статуса задачи
         this.CHANGE_TASK_STATUS(task)
         setTimeout(() => {
            // Обновление счетчиков задач
            this.COUNT_TASKS()
            // Фильтрация задач при изменении статуса задачи
            this.FILTER_TASKS(activeTaskNav)
         }, 200)
      },
      // Открытие формы редактирования задачи
      openFormChangeTask(task) {
         // Переключение во vuex статуса отображения формы редактирования задачи
         this.TOGGLE_IS_FORM_CHANGE_TASK_OPEN()
         // Передача родительскому компоненту текста из задачи
         this.$emit('taskFromItem', task)
      },
      // Закрытие формы редактирования задачи
      closeFormChangeTask() {
         // Переключение во vuex статуса отображения формы редактирования задачи
         this.TOGGLE_IS_FORM_CHANGE_TASK_OPEN()
      },
   },
}
</script>

<style lang="scss" scoped>
.task-item {
   margin-top: 13px;
   padding: 2px 10px;
   display: grid;
   grid-template-columns: 0.5fr 15fr 1fr 1fr;
   border: none;
   box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.194);
   border-radius: 6px;
   align-items: center;
   @media (max-width: 850px) {
      grid-template-columns: 0.5fr 14fr 2fr 1fr;
   }
   .task-item__checkbox {
      margin-right: 10px;
   }
   .task-item__task-title-done {
      text-decoration: line-through;
      color: rgba(170, 170, 170, 0.459);
   }
   .task-item__btn-edit {
      background-color: #3273f600;
      color: $accent-color;
      font-size: 20px;
      padding: 0;
      transition: 0.1s;
      &:hover {
         transform: scale(1.2);
         transition: 0.3s;
      }
      &:active {
         transform: scale(1);
         transition: 0.1s;
      }
   }
   .task-item__btn-remove {
      background-color: rgba(217, 87, 61, 0);
      color: rgb(217, 87, 61);
      font-size: 26px;
      padding: 0;
      transition: 0.1s;
      &:hover {
         transform: scale(1.2);
         transition: 0.3s;
      }
      &:active {
         transform: scale(1);
         transition: 0.1s;
      }
   }
}
</style>
