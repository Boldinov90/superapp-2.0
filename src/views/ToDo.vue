<template>
   <div class="wrapper">
      <div class="todo">
         <div class="todo__content content">
            <ToDoFilterNav class="content__navigation" />
            <ToDoList class="content__todo-list" />
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoFilterNav from '../components/todo/ToDoFilterNav.vue'
import ToDoList from '../components/todo/ToDoList.vue'

export default {
   components: { ToDoFilterNav, ToDoList },
   data() {
      return {}
   },
   computed: {
      ...mapGetters('todo', ['IS_DARK_THEME']),
   },
   methods: {},
}
</script>

<style lang="scss" scoped>
.wrapper {
   min-height: 100vh;
   padding: 60px 0;
   .todo {
      .todo__content {
         display: grid;
         grid-template-columns: 1fr;
         .content__navigation {
            margin-right: 40px;
         }
         .content__todo-list {
            margin-left: 250px;
         }
      }
   }
}
</style>
