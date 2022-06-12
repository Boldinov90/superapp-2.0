<template>
   <div class="task-item">
      <input class="checkbox" type="checkbox" :checked="task.isDone" />
      <div class="task-id">{{ task.id }}</div>
      <div class="task-title">{{ task.taskTitle }}</div>
      <MyButton :valueBtn="'Удалить'" class="btn" />
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
   // width: 400px;
   // display: flex;
   // align-items: center;
   // justify-content: space-between;
   // justify-content: flex-end;
   @include flexPosition(_, center);
   .checkbox {
      margin-right: 10px;
   }
   .task-id {
      margin-right: 10px;

      // justify-self: start;
   }
   .task-title {
      margin-right: 10px;

   }
   .btn {
      justify-content: end;

      background-color: red;
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
