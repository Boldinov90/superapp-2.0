<template>
   <div class="app" :class="{ dark: IS_DARK_THEME }">
      <div class="container" :class="{ 'dark-container': IS_DARK_THEME }">
         <Header class="header"/>
         <router-view />
      </div>
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
.app {
   font-family: 'Montserrat', sans-serif;
   background-color: #e3e3e3;
   color: #212121;
}
.dark{
   background-color: #2F2F33;

}
</style>
