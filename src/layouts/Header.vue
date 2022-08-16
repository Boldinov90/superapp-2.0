<template>
   <header class="wrapper">
      <div
         class="header container"
         :class="{ 'dark-container': IS_DARK_THEME }"
      >
         <div class="header__logo">
            {{ textLogo }}
         </div>
         <ul class="header__navigation">
            <li class="header__navigation-item">
               <router-link class="nav-item" to="/"> ToDo </router-link>
            </li>
            <li class="header__navigation-item">
               <router-link class="nav-item" to="/css-animate">
                  CSS Анимации
               </router-link>
            </li>
            <li class="header__navigation-item">
               <router-link class="nav-item" to="/calculator">
                  Калькулятор
               </router-link>
            </li>
         </ul>
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
         <MyBurgerWrapper class="header__menu-burger">
            <ul class="menu__box" :class="{ 'menu__box-dark': IS_DARK_THEME }">
               <li class="header__navigation-item">
                  <router-link class="menu__item" to="/"> ToDo </router-link>
               </li>
               <li class="header__navigation-item">
                  <router-link class="menu__item" to="/css-animate">
                     CSS Анимации
                  </router-link>
               </li>
               <li class="header__navigation-item">
                  <router-link class="menu__item" to="/calculator">
                     Калькулятор
                  </router-link>
               </li>
            </ul>
         </MyBurgerWrapper>
      </div>
   </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyButton from '../components/UI/MyButton.vue'
import MyBurgerWrapper from '../components/UI/MyBurgerWrapper.vue'

export default {
   components: {
      MyButton,
      MyBurgerWrapper,
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
      .header__btn {
         background-color: $accent-color;
         color: $text-button-color;
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
