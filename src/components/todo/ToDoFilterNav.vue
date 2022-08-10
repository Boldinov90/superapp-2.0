<template>
   <div class="todo-filter-nav-wrapper">
      <ul class="todo-filter-nav" v-for="taskNav in TASKSNAV" :key="taskNav.id">
         <li
            class="todo-filter-nav-item"
            :class="{ 'nav-active': taskNav.isActive }"
            @click="filterTasks(taskNav)"
         >
            {{ taskNav.value }}
            <div class="todo-filter-nav-item-count">{{ taskNav.count }}</div>
         </li>
      </ul>
      <slot></slot>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   data() {
      return {}
   },
   computed: {
      ...mapGetters(['TASKSNAV', 'ACTIVE_TASK_NAV']),
   },
   methods: {
      ...mapActions(['COUNT_TASKS', 'FILTER_TASKS']),
      filterTasks(taskNav) {
         this.FILTER_TASKS(taskNav)
      },
   },
   components: {},
   beforeMount() {
      this.COUNT_TASKS()
      window.addEventListener('load', () => {
         this.COUNT_TASKS()
      })
      this.FILTER_TASKS(this.ACTIVE_TASK_NAV)
   },
}
</script>

<style lang="scss" scoped>
.todo-filter-nav-wrapper {
   position: fixed;
   .todo-filter-nav {
      width: 230px;
      .todo-filter-nav-item {
         color: $text-menu-color;
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
            background-color: $accent-color;
            width: 30px;
            height: 17px;
            border-radius: 10px;
         }
      }
      .nav-active {
         color: $accent-color;
         font-weight: 600;
      }
   }
}
</style>
