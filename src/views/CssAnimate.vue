<template>
   <div class="wrapper">
      <div class="css-animate animate__animated animate__fadeIn">
         <CssAnimateFlipCards />
         <CssAnimateMovementOfImages />
         <CssAnimateBallJump />
      </div>
   </div>
</template>

<script>
import CssAnimateFlipCards from '../components/css-animate/CssAnimateFlipCards.vue'
import CssAnimateMovementOfImages from '../components/css-animate/CssAnimateMovementOfImages.vue'
import CssAnimateBallJump from '../components/css-animate/CssAnimateBallJump.vue'
export default {
   components: {
      CssAnimateFlipCards,
      CssAnimateMovementOfImages,
      CssAnimateBallJump
   },
   data() {
      return {
      }
   },
   methods: {},
}
</script>

<style lang="scss" scoped>
.css-animate {
   min-height: 100vh;
   padding: 20px 0 50px 0;
}
</style>
