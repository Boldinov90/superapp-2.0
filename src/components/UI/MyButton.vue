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
      ...mapGetters(['IS_DARK_THEME']),
   },
}
</script>

<style lang="scss" scoped>
.btn {
   padding: 5px 10px;
   border: none;
   border-radius: 5px;
   transition: 0.2s;
   &:hover {
      transform: scale(1.02);
      transition: 0.2s;
   }
}
</style>
