<template>
   <div class="wrapper">
      <div class="todo container" :class="{ 'dark-container': IS_DARK_THEME }">
         <h1 class="todo__title">{{ pageTitle }}</h1>
         <div class="todo__content content">
            <ToDoFilterNav class="content__navigation"/>
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
      return {
         pageTitle: 'Список задач',
      }
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
   methods: {},
}
</script>

<style lang="scss" scoped>
.wrapper {
   .todo {
      padding-top: 60px;

      .todo__title {
         @extend %pagetitle;
      }
      .todo__content {
         // @include flexPosition(_, center);
         display: grid;
         grid-template-columns: 1fr 4fr;
         .content__navigation {
            margin-right: 40px;
         }
         .content__todo-list {
            // overflow-y: scroll;
         }
      }
   }
}
</style>
