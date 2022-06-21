<template>
   <div class="task-item">
      <input
         class="task-item__checkbox"
         type="checkbox"
         :checked="task.checkbox"
      />
      <div class="task-item__task-title" :class="{ 'task-item__task-title-done': task.checkbox }">{{ task.taskTitle }}</div>
      <MyButton :valueBtn="'Изменить'" class="task-item__btn-change"/>
      <MyButton :valueBtn="'Удалить'" class="task-item__btn-remove" />
   </div>
</template>

<script>
import MyButton from '../UI/MyButton.vue'
export default {
   props: {
      task: {
         type: Object,
      },
   },
   components: { MyButton },
}
</script>

<style lang="scss" scoped>
.task-item {
   margin-top: 13px;
   padding: 10px 20px;
   display: grid;
   grid-template-columns: 0.5fr 15fr 1fr 1fr;
   border: none;
   box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.103);
   border-radius: 6px;
   align-items: center;
   .task-item__checkbox {
      margin-right: 10px;
   }
   .task-item__task-title-done {
      text-decoration: line-through;
      color: rgba(170, 170, 170, 0.459);
   }
   .task-item__btn-change {
      background-color: #3273F6;
      color: white;
      margin-right: 20px;
      &:hover {
         background-color: #3273f6de;
      }
      &:active {
         background-color: #3273F6;
      }
   }
   .task-item__btn-remove {
      background-color: rgb(217, 87, 61);
      color: white;
      &:hover {
         background-color: rgb(255, 84, 84);
      }
      &:active {
         background-color: red;
      }
   }
}
</style>
