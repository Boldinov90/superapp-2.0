<template>
   <div class="form-overlay" :class="{ 'form-overlay-dark': IS_DARK_THEME }">
      <form class="form" :class="{ 'form-dark': IS_DARK_THEME }">
         <div class="form__title">{{ formTitle }}</div>
         <slot />
      </form>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   props: {
      formTitle: {
         type: String,
      },
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
}
</script>

<style lang="scss" scoped>
.form-overlay {
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background-color: rgba(255, 255, 255, 0.712);
   // background-color: rgba(109, 23, 23, 0.712);
   display: grid;
   align-items: center;
   justify-content: center;
   .form {
      margin-top: -60px;
      border-radius: 8px;
      padding: 20px 20px;
      width: 500px;
      background-color: $background-color-container;
      box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.194);
      .form__title {
         @extend %formtitle;
      }
   }
   .form-dark {
      background-color: $background-color-dark-container;
   }
}
.form-overlay-dark {
   background-color: rgba(31, 31, 31, 0.838);
}
</style>
