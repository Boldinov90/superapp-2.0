<template>
   <div class="app" :class="{ dark: IS_DARK_THEME }">
      <Header />
      <router-view />
   </div>
</template>

<script>
import Header from './layouts/Header.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
   components: {
      Header,
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
   methods: {
      ...mapActions(['GET_ALL_TASKS']),
   },
   beforeMount() {
      this.GET_ALL_TASKS()
   },
}
</script>

<style lang="scss">
.app{
   font-family: 'Montserrat', sans-serif;
   height: 100vh;
   background-color: #E3E3E3;
   color: #212121;
}
.dark{
   background-color: #383838;
   color: #E8E8E8;
}

</style>
