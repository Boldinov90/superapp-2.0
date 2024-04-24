<template>
   <div
      class="todo-filter-nav-wrapper"
      :class="{ 'dark-container': IS_DARK_THEME }"
   >
      <img
         class="todo-filter-icon-close"
         src="@/assets/img/filter-menu-icon-close.svg"
         v-if="IS_FILTER_MENU_ACTIVE"
         @click="mobileToDofilterOpenClose"
      />
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
import HeaderNavigation from '../HeaderNavigation.vue'

export default {
   data() {
      return {}
   },
   computed: {
      ...mapGetters([
         'TASKSNAV',
         'ACTIVE_TASK_NAV',
         'IS_DARK_THEME',
         'IS_FILTER_MENU_ACTIVE',
      ]),
   },
   methods: {
      ...mapActions([
         'COUNT_TASKS',
         'FILTER_TASKS',
         'TOGGLE_IS_FILTER_MENU_ACTIVE',
      ]),
      filterTasks(taskNav) {
         this.FILTER_TASKS(taskNav)
      },
      mobileToDofilterOpenClose() {
         this.TOGGLE_IS_FILTER_MENU_ACTIVE()
      },
   },
   beforeMount() {
      // Счет задач
      this.COUNT_TASKS()
      window.addEventListener('load', () => {
         this.COUNT_TASKS()
      })
      // Фильтрация задач
      this.FILTER_TASKS(this.ACTIVE_TASK_NAV)
      // Отслеживание изменения ширины страницы и закрытие панели фильтрации.
      addEventListener('resize', (event) => {
         if (this.IS_FILTER_MENU_ACTIVE) {
            this.TOGGLE_IS_FILTER_MENU_ACTIVE()
         }
      })
   },
   components: { HeaderNavigation },
}
</script>

<style lang="scss" scoped>
.todo-filter-nav-wrapper {
   background-color: $background-color-container;
   .todo-filter-icon-close {
      margin-bottom: 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
         transform: scale(1.1);
         transition: 0.3s;
      }
   }
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
