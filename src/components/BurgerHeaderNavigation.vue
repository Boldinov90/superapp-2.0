<template>
   <div>
      <div class="header__menu-burger">
         <input class="menu__toggle" id="idName" type="checkbox" />
         <label class="menu__btn" for="idName">
            <span></span>
         </label>
         <ul class="menu__box" :class="{ 'menu__box-dark': IS_DARK_THEME }">
            <li class="header__navigation-item">
               <router-link class="menu__item" to="/"> Home </router-link>
            </li>
            <li class="header__navigation-item">
               <router-link class="menu__item" to="/todo"> ToDo </router-link>
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
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
}
</script>

<style lang="scss">
#idName {
   opacity: 0;
   &:checked ~ .menu__btn > span {
      transform: rotate(45deg);
   }
   &:checked ~ .menu__btn > span::before {
      top: 0;
      transform: rotate(0);
   }
   &:checked ~ .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
   }
   &:checked ~ .menu__box {
      visibility: visible;
      right: 0;
   }
}


.menu__btn {
   display: flex;
   align-items: center;
   position: absolute;
   top: 17px;
   right: 20px;
   width: 26px;
   height: 26px;
   cursor: pointer;
   z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
   display: block;
   position: absolute;
   width: 100%;
   height: 2px;
   background-color: #616161;
   transition-duration: 0.25s;
}
.menu__btn > span::before {
   content: '';
   top: -8px;
}
.menu__btn > span::after {
   content: '';
   top: 8px;
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
.menu__box-dark {
   background-color: $background-color-dark-container;
}
</style>