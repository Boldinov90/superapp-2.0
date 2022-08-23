<template>
   <div>
      <div class="animation-jump">
         <div
            v-for="ball of balls"
            :key="ball"
            class="animation-jump__ball"
            :class="{ 'animation-jump__ball-dark': IS_DARK_THEME }"
         />
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   data() {
      return {
         balls: 15,
      }
   },
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
}
</script>

<style lang="scss" scoped>
.animation-jump {
   margin-top: 100px;
   height: 400px;
   align-items: center;
   display: flex;
   justify-content: center;
   @media (max-width: 530px) {
      margin-top: 40px;
   }
   .animation-jump__ball {
   margin-right: 5px;
   margin-left: 5px;
   transform: translateY(65px);
   background-color: $background-color-dark-container;
   height: 25px;
   width: 25px;
   border-radius: 50%;
   animation: jump 1.5s infinite ease-in-out;
   @media (max-width: 940px) {
      height: 20px;
      width: 20px;
      margin-right: 5px;
      margin-left: 5px;
   }
   @media (max-width: 530px) {
      height: 15px;
      width: 15px;
      margin-right: 2px;
      margin-left: 2px;
   }
}
.animation-jump__ball-dark {
   background-color: $background-color-container;
}
.animation-jump__ball:nth-child(2) {
   animation-delay: 100ms;
}
.animation-jump__ball:nth-child(3) {
   animation-delay: 200ms;
}
.animation-jump__ball:nth-child(4) {
   animation-delay: 300ms;
}
.animation-jump__ball:nth-child(5) {
   animation-delay: 400ms;
}
.animation-jump__ball:nth-child(6) {
   animation-delay: 500ms;
}
.animation-jump__ball:nth-child(7) {
   animation-delay: 600ms;
}
.animation-jump__ball:nth-child(8) {
   animation-delay: 700ms;
}
.animation-jump__ball:nth-child(9) {
   animation-delay: 800ms;
}
.animation-jump__ball:nth-child(10) {
   animation-delay: 900ms;
}
.animation-jump__ball:nth-child(11) {
   animation-delay: 1000ms;
}
.animation-jump__ball:nth-child(12) {
   animation-delay: 1100ms;
}
.animation-jump__ball:nth-child(13) {
   animation-delay: 1200ms;
}
.animation-jump__ball:nth-child(14) {
   animation-delay: 1300ms;
}
.animation-jump__ball:nth-child(15) {
   animation-delay: 1400ms;
}
@keyframes jump {
   0% {
      transform: translateY(65px);
   }
   25% {
      transform: translateY(65px);
   }
   50% {
      transform: translateY(-65px);
   }
   75% {
      transform: translateY(65px);
   }
   100% {
      transform: translateY(65px);
   }
}
}

</style>
