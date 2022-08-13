<template>
   <header class="wrapper">
      <div
         class="header container"
         :class="{ 'dark-container': IS_DARK_THEME }"
      >
         <div class="header__logo">
            {{ textLogo }}
         </div>
         <DesktopNavigation />
         <MyButton
            class="header__btn"
            v-if="!IS_DARK_THEME"
            :valueBtn="'Темная тема'"
            @click="toggleDarkTheme"
         />
         <MyButton
            class="header__btn"
            v-else
            :valueBtn="'Светлая тема'"
            @click="toggleDarkTheme"
         />
         <MobileNavigation class="header__menu-burger" />
      </div>
   </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyButton from '../components/UI/MyButton.vue'
import MobileNavigation from '../layouts/MobileNavigation.vue'
import DesktopNavigation from '../layouts/DesktopNavigation.vue'

export default {
   components: {
      MyButton,
      MobileNavigation,
      DesktopNavigation,
   },
   data() {
      return {
         textLogo: 'SUPERAPP 2.0',
      }
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
   methods: {
      ...mapActions(['TOGGLE_IS_DARK_THEME']),
      toggleDarkTheme() {
         this.TOGGLE_IS_DARK_THEME()
      },
   },
}
</script>

<style lang="scss" scoped>
.wrapper {
   .header {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      max-width: 1100px;
      height: 60px;
      margin: 0 auto;
      padding: 0 20px;
      @extend %flexallcenter;
      justify-content: space-between;
      z-index: 9;
      .header__logo {
         font-size: 20px;
         &:hover {
            color: $accent-color;
            cursor: pointer;
         }
      }
      .header__btn {
         background-color: $accent-color;
         color: $text-button-color;
      }
      .header__menu-burger {
         display: none;
         @media (max-width: 650px) {
            display: block;
         }
      }
   }
}
</style>
