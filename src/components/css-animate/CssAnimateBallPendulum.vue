<template>
   <div>
      <div class="animation-pendulum">
         <div
            v-for="ball of balls"
            :key="ball"
            class="animation-pendulum__ball"
         />
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         balls: 7,
      }
   },
}
</script>

<style lang="scss" scoped>
.animation-pendulum {
   margin-top: 100px;
   margin-bottom: 100px;
   height: 500px;
   border-radius: 50%;
   align-items: center;
   margin-left: -350px;
   display: flex;
   justify-content: center;
   @media (max-width: 530px) {
      margin-left: -300px;
      margin-top: 30px;
   }
   @media (max-width: 450px) {
      margin-left: -210px;
      margin-top: 0;
   }
   .animation-pendulum__ball {
      background-color: rgb(139, 32, 253);
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-left: 10px;
      margin-right: 10px;
      transform-origin: 500% center;
      position: absolute;
      animation: pendulum 3.5s infinite ease-in-out;
      @media (max-width: 530px) {
         transform-origin: 450% center;
      }
      @media (max-width: 450px) {
         height: 30px;
         width: 30px;
         transform-origin: 400% center;
      }
   }
   .animation-pendulum__ball:nth-child(2) {
      animation-delay: 250ms;
      background-color: #d61212;
   }
   .animation-pendulum__ball:nth-child(3) {
      animation-delay: 500ms;
      background-color: #169b07;
   }
   .animation-pendulum__ball:nth-child(4) {
      animation-delay: 750ms;
      background-color: #1512d6;
   }
   .animation-pendulum__ball:nth-child(5) {
      animation-delay: 1000ms;
      background-color: #f59d10;
   }
   .animation-pendulum__ball:nth-child(6) {
      animation-delay: 1250ms;
      background-color: #d612bc;
   }
   .animation-pendulum__ball:nth-child(7) {
      animation-delay: 1500ms;
      background-color: #12c9d6;
   }
   @keyframes pendulum {
      to {
         transform: rotate(1turn);
      }
   }
}
</style>
