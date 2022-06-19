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
.btn{
   padding: 5px 10px;
}

</style>
