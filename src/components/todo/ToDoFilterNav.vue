<template>
   <div class="todo-filter-nav-wrapper">
      <ul class="todo-filter-nav" v-for="taskNav in tasksNav" :key="taskNav.id">
         <li class="todo-filter-nav-item">
            {{ taskNav.value }}
            <div class="todo-filter-nav-item-count">{{ taskNav.count }}</div>
         </li>
      </ul>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   data() {
      return {
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
   computed: {
      ...mapGetters(['TASKS']),
   },
   methods: {
      countTasks() {
         this.tasksNav.forEach((item) => {
            let arr = this.TASKS
            if (item.name === 'allTasks') {
               item.count = this.TASKS.length
            }
            if (item.name === 'activeTasks') {
               item.count = arr.filter((item) => item.checkbox !== true).length
            }
            if (item.name === 'doneTasks') {
               item.count = arr.filter((item) => item.checkbox !== false).length
            }
         })
      },
   },
   components: {},
   mounted() {
      this.countTasks()
      window.addEventListener('load', () => {
         this.countTasks()
      })
   },
}
</script>

<style lang="scss" scoped>
.todo-filter-nav-wrapper {
   // margin-top: 13px;
   position: fixed;
   .todo-filter-nav {
      .todo-filter-nav-item {
         width: 200px;
         color: #969696;
         font-size: 14px;
         font-weight: 400;
         margin-top: 10px;
         cursor: pointer;
         display: flex;
         justify-content: space-between;
         align-items: center;
         .todo-filter-nav-item-count {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 12px;
            background-color: #3273F6;
            width: 30px;
            height: 17px;
            border-radius: 10px;
            // padding: 4px;
         }
      }
   }
}
</style>
