<template>
   <div>
      <div class="todo-list" v-for="task in TASKS" :key="task.id">
         <ToDoItem :task="task" />
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
      ...mapGetters(['TASKS']),
   },
   methods: {},
}
</script>

<style lang="scss" scoped>

</style>
