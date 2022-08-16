<template>
   <div>
      <div class="hamburger-menu">
         <input class="menu__toggle" id="idName" type="checkbox" />
         <label class="menu__btn" for="idName">
            <span></span>
         </label>
         <slot />
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
#idName{
   opacity: 0;
}

#idName:checked ~ .menu__btn > span {
   transform: rotate(45deg);
}
#idName:checked ~ .menu__btn > span::before {
   top: 0;
   transform: rotate(0);
}
#idName:checked ~ .menu__btn > span::after {
   top: 0;
   transform: rotate(90deg);
}
#idName:checked ~ .menu__box {
   visibility: visible;
   right: 0;
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
</style>
