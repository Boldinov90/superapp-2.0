<template>
   <div class="task-item">
      <input class="checkbox" type="checkbox" :checked="task.checkbox" />
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
   // background-color: aqua;
   // width: 100%;
   margin-top: 17px;
   display: grid;
   grid-template-columns: 0.5fr 0.3fr 15fr 1fr;
   // grid-template-rows: 1fr;
   border: none;
   box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
   border-radius: 6px;
   // width: 400px;
   // display: flex;
   align-items: center;
   padding: 10px 20px;

   // justify-content: space-between;
   // justify-content: flex-end;
   // @include flexPosition(_, center);
   .checkbox {
      margin-right: 10px;
   }
   .task-id {
      margin-right: 10px;
      // justify-self: end;


      // justify-self: flex-start;
   }
   .task-title {
      // margin-right: 10px;

   }
   .btn {
      // justify-self: end;

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
