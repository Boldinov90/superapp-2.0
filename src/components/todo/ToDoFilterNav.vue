<template>
  <div class="todo-filter-nav-wrapper">
     <ul class="todo-filter-nav" v-for="taskNav in tasksNav" :key="taskNav.id">
        <li class="todo-filter-nav-item">{{taskNav.value}}</li>
     </ul>
  </div>
</template>

<script>
export default {
   data(){
      return{
         tasksNav: [
            {
               name: 'allTasks',
               value: 'Все задачи',
               isActive: true,
               count: '',
            },
            {
               name: 'activeTasks',
               value: 'Активные задачи',
               isActive: '',
               count: '',
            },
            {
               name: 'doneTasks',
               value: 'Завершенные',
               isActive: '',
               count: '',
            },
         ],
      }
   },
   components:{}
}
</script>

<style lang="scss" scoped>
.todo-filter-nav-item{
   color: #969696;
   font-size: 18px;
   font-weight: 400;
}
</style>