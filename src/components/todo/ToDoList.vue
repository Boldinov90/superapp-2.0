<template>
   <div v-if="TASKS_SANDBOX.length">
      <div class="todo-list" v-for="task in TASKS_SANDBOX" :key="task.id">
         <ToDoItem :task="task" @taskFromItem="taskFromItem" />
      </div>
   </div>
   <div class="if-no-tasks" v-else>
      <div v-if="IS_ZERO_TASKS.isAllTasksZero">
         Список задач пуст. Добавьте новую задачу.
      </div>
      <div v-else-if="IS_ZERO_TASKS.isActiveTasksZero">
         Список активных задач пуст.
      </div>
      <div v-else-if="IS_ZERO_TASKS.isDoneTasksZero">
         Список завершенных задач пуст.
      </div>
      <div v-else-if="IS_ZERO_TASKS.isSearchTasksZero">
         Ничего не найдено.
      </div>

   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoItem from './ToDoItem.vue'

export default {
   components: {
      ToDoItem,
   },
   computed: {
      ...mapGetters(['TASKS_SANDBOX', 'IS_ZERO_TASKS', 'TASKS_SANDBOX']),
   },
   methods: {
      // Передача родительскому компоненту текста из задачи
      taskFromItem(taskFromItem) {
         this.$emit('taskFromItem', taskFromItem)
      },
   },
}
</script>

<style lang="scss" scoped>
.if-no-tasks {
   margin-top: 60px;
   display: flex;
   justify-content: center;
}
</style>
