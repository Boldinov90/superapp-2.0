<template>
   <div>
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
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   data() {
      return {
         // css: {
         //    'flexDirection': (this.flexDirection)
         // }
      }
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
}
</script>

<style lang="scss" scoped>
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

</style>
