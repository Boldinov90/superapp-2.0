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
            class="header__btn-light"
            v-if="!IS_DARK_THEME"
            :valueBtn="'Темная тема'"
            @click="toggleDarkTheme"
         />
         <MyButton
            class="header__btn-dark"
            v-else
            :valueBtn="'Светлая тема'"
            @click="toggleDarkTheme"
         />
      </div>
   </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyButton from '../components/UI/MyButton.vue'

export default {
   components: { MyButton },
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
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   .header {
      height: 60px;
      @extend %flexallcenter;
      justify-content: space-between;
      .header__logo {
         font-size: 20px;
      }
      .header__navigation {
         min-width: 300px;
         @extend %flexallcenter;
         justify-content: space-between;
         flex-wrap: wrap;
         .header__navigation-item {
            .nav-item {
               color: #969696;
            }
         }
      }
      .header__btn-light {
         background-color: aquamarine;
      }
      .header__btn-dark {
         background-color: rgb(53, 131, 105);

      }
   }
}
</style>
