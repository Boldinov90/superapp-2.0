<template>
   <div v-if="TASKS.length !== 0">
      <div class="todo-list" v-for="task in TASKS" :key="task.id">
         <ToDoItem :task="task" @taskFromItem="taskFromItem" />
      </div>
      <!-- <slot></slot> -->
   </div>
   <div class="if-no-tasks" v-else>
      Список задач пуст. Добавьте новую задачу.
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoItem from './ToDoItem.vue'

export default {
   props: {
   },
   components: {
      ToDoItem,
   },
   computed: {
      ...mapGetters(['TASKS']),
   },
   methods: {
      taskFromItem(taskFromItem){
         this.$emit('taskFromItem', taskFromItem)
      },
   },
}
</script>

<style lang="scss" scoped>
.if-no-tasks{
   margin-top: 60px;
   display: flex;
   justify-content: center;
}
</style>
