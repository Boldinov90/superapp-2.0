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

</style>
