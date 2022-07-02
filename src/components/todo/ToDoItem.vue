<template>
   <div class="task-item">
      <input
         v-model="task.checkbox"
         class="task-item__checkbox"
         type="checkbox"
         :checked="task.checkbox"
         @click="changeTaskStatus(task)"
      />
      <div
         class="task-item__task-title"
         :class="{ 'task-item__task-title-done': task.checkbox }"
      >
         {{ task.taskTitle }}
      </div>
      <MyButton :valueBtn="'&#9998;'" class="task-item__btn-edit" />
      <MyButton
         :valueBtn="'&otimes;'"
         class="task-item__btn-remove"
         @click="deleteTask(task)"
      />
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import MyButton from '../UI/MyButton.vue'
export default {
   props: {
      task: {
         type: Object,
      },
   },
   components: { MyButton },
   methods: {
      ...mapActions(['DELETE_TASK', 'COUNT_TASKS', 'CHANGE_TASK_STATUS']),
      // Функция удаления задачи
      deleteTask(task) {
         // Удаление выбранной задачи
         this.DELETE_TASK(task)
         // Обновление счетчиков задач
         this.COUNT_TASKS()
      },
      // Функция изменения статуса задачи
      changeTaskStatus(task) {
         // Изменение статуса задачи
         this.CHANGE_TASK_STATUS(task)
         // Обновление счетчиков задач
         this.COUNT_TASKS()
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
