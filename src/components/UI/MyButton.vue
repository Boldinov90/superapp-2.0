<template>
   <button class="btn">
      {{ valueBtn }}
   </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   props: {
      valueBtn: {
         type: String,
      },
   },
   computed: {
      ...mapGetters('todo', ['IS_DARK_THEME']),
   },
}
</script>

<style lang="scss" scoped>
.btn {
   padding: 5px 10px;
   border: none;
   border-radius: 5px;
}
</style>
