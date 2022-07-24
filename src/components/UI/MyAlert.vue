<template>
   <div class="alert__overlay" :class="{ 'alert__overlay-dark': IS_DARK_THEME }">
      <div class="alert__body" :class="{ 'alert__body-dark': IS_DARK_THEME }">
         <div class="alert__title">{{ TEXT_ALERT }}</div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   props: {
      alertTitle: {
         type: String,
      },
   },
   computed: {
      ...mapGetters(['TEXT_ALERT', 'IS_DARK_THEME']),
   },
}
</script>

<style lang="scss" scoped>
.alert__overlay {
   animation-duration: 0.2s;
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background-color: rgba(255, 255, 255, 0.771);
   display: grid;
   align-items: center;
   justify-content: center;
   .alert__body {
      margin-top: -60px;
         border-radius: 8px;
         padding: 20px 20px;
         width: 500px;
         background-color: $background-color-container;
         box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.194);
         border-left: 14px solid red;
      .alert__title {
         
      }
   }
   .alert__body-dark {
      background-color: $background-color-dark-container;
   }
}
.alert__overlay-dark {
   background-color: rgba(31, 31, 31, 0.838);
}

</style>
