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
      .header__logo {
         font-size: 20px;
         &:hover {
            color: #3273F6;
            cursor: pointer;
         }
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
            .active {
               color: #3273F6;
               border-bottom: 2px solid #3273F6;
            }
         }
      }
      .header__btn {
         background-color: #3273F6;
         color: #f7f6f6;
      }
   }
}
</style>
