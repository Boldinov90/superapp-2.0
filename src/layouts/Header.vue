<template>
   <header class="wrapper">
      <div
         class="header container"
         :class="{ 'dark-container': IS_DARK_THEME }"
      >
         <router-link class="header__logo" to="/">
            {{ textLogo }}
         </router-link>
         <HeaderNavigation class="header__navigation"/>
         <HeaderToggleTheme class="header__toggle" @change="toggleDarkTheme"/>
         <BurgerHeaderNavigation class="header__menu-burger"/>
      </div>
   </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyButton from '../components/UI/MyButton.vue'
import BurgerHeaderNavigation from '../components/BurgerHeaderNavigation.vue'
import HeaderNavigation from '../components/HeaderNavigation.vue'
import HeaderToggleTheme from '../components/HeaderToggleTheme.vue'

export default {
   components: {
      MyButton,
      BurgerHeaderNavigation,
      HeaderNavigation,
      HeaderToggleTheme
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
         font-size: 18px;
         color: $accent-color;
         &:hover {
            color: $accent-color;
            cursor: pointer;
         }
      }
      .header__navigation {
         @extend %flexallcenter;
         justify-content: space-between;
         column-gap: 20px;
         flex-wrap: wrap;
         @media (max-width: 650px) {
            display: none;
         }
         .header__navigation-item {
            .nav-item {
               color: $text-menu-color;
            }
            .active {
               color: $accent-color;
               border-bottom: 2px solid $accent-color;
            }
         }
      }
      .header__menu-burger {
         display: none;
         @media (max-width: 650px) {
            display: block;
         }
         .menu__box {
            display: block;
            position: fixed;
            visibility: hidden;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100%;
            margin: 0;
            padding: 80px 0;
            list-style: none;
            background-color: $background-color-container;
            box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
            transition-duration: 0.25s;
         }
         .menu__box-dark {
            background-color: $background-color-dark-container;
         }
         .header__navigation-item {
            .menu__item {
               display: block;
               padding: 8px 0;
               margin: 0px 24px;
               color: $text-menu-color;
               font-size: 14px;
               font-weight: 400;
               text-decoration: none;
               transition-duration: 0.25s;
            }
            .active {
               color: $accent-color;
               font-weight: 600;
            }
         }
      }
   }
}
</style>
