<template>
   <div class="css-animate animate__animated animate__fadeIn">
      <div class="css-animate__title">CSS Анимации</div>
      <div class="content animate-cards">
         <div class="animate-card-wrapper">
            <div
               class="animate-card"
               :class="[animateCardOne.isClick ? 'one' : '']"
               @click.prevent="flipOverCard(animateCardOne)"
            >
               <div class="card animate-card-one-front">
                  {{ animateCardOne.text }}
               </div>
               <div class="card animate-card-one-back">
                  {{ animateCardOne.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card-wrapper">
            <div
               class="animate-card"
               :class="[animateCardTwo.isClick ? 'two' : '']"
               @click.prevent="flipOverCard(animateCardTwo)"
            >
               <div class="card animate-card-two-front">
                  {{ animateCardTwo.text }}
               </div>
               <div class="card animate-card-two-back">
                  {{ animateCardTwo.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card-wrapper">
            <div
               class="animate-card"
               :class="[animateCardThree.isClick ? 'three' : '']"
               @click.prevent="flipOverCard(animateCardThree)"
            >
               <div class="card animate-card-three-front">
                  {{ animateCardThree.text }}
               </div>
               <div class="card animate-card-three-back">
                  {{ animateCardThree.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card-wrapper">
            <div
               class="animate-card"
               :class="[animateCardFour.isClick ? 'four' : '']"
               @click.prevent="flipOverCard(animateCardFour)"
            >
               <div class="card animate-card-four-front">
                  {{ animateCardFour.text }}
               </div>
               <div class="card animate-card-four-back">
                  {{ animateCardFour.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card-wrapper">
            <div
               class="animate-card"
               :class="[animateCardFive.isClick ? 'five' : '']"
               @click.prevent="flipOverCard(animateCardFive)"
            >
               <div class="card animate-card-five-front">
                  {{ animateCardFive.text }}
               </div>
               <div class="card animate-card-five-back">
                  {{ animateCardFive.textIfClick }}
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         animateCardOne: {
            isClick: false,
            text: 'Жамкай меня',
            textIfClick: 'Ух ты, давай еще раз',
         },
         animateCardTwo: {
            isClick: false,
            text: 'Жамкай меня',
            textIfClick: 'Лихо, продолжай',
         },
         animateCardThree: {
            isClick: false,
            text: 'Жамкай меня',
            textIfClick: 'Видал, как могу?',
         },
         animateCardFour: {
            isClick: false,
            text: 'Жамкай меня',
            textIfClick: 'Вжух....жги!',
         },
         animateCardFive: {
            isClick: false,
            text: 'Жамкай меня',
            textIfClick: 'Чпонькс, вертуха...',
         },
         animationTwo: {
            sumBalls: 15,
         },
         animationThree: {
            sumBalls: 7,
         },
      }
   },
   methods: {
      flipOverCard(card) {
         card.isClick = !card.isClick
         setTimeout(() => {
            card.isClick = !card.isClick
         }, 3000)
      },
   },
}
</script>

<style lang="scss" scoped>
// .content {
//    position: relative;
// }
.css-animate {
   min-height: 100vh;
   padding: 100px 0 0 0;
   // .title {
      .animate-cards {
         margin-top: 50px;
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         align-items: center;
      }
      .animate-card-wrapper {
         margin-top: 50px;
         margin-left: 20px;
         margin-right: 20px;
         width: 200px;
         height: 300px;
         perspective: 1000px;
      }
      .animate-card {
         width: 100%;
         height: 100%;
         position: relative;
         transform-style: preserve-3d;
         transition: transform 0.2s;
      }
      .card {
         position: absolute;
         color: white;
         text-shadow: 1px 1px 2px black;
         width: 100%;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 14px;
         box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.603);
         backface-visibility: hidden;
         cursor: pointer;
      }
      .animate-card-one-front {
         background-color: rgb(224, 106, 59);
      }
      .animate-card-one-back {
         background-color: rgb(224, 106, 59);
         transform: rotateY(180deg);
      }
      .animate-card-two-front {
         background-color: rgb(4, 150, 218);
      }
      .animate-card-two-back {
         background-color: rgb(4, 150, 218);
         transform: rotateX(180deg);
      }
      .animate-card-three-front {
         background-color: rgb(214, 88, 204);
      }
      .animate-card-three-back {
         background-color: rgb(214, 88, 204);
         transform: rotateY(180deg);
      }
      .animate-card-four-front {
         background-color: rgb(88, 214, 172);
      }
      .animate-card-four-back {
         background-color: rgb(88, 214, 172);
         transform: rotateY(180deg);
      }
      .animate-card-five-front {
         background-color: rgb(223, 222, 138);
      }
      .animate-card-five-back {
         background-color: rgb(223, 222, 138);
         transform: rotateY(180deg);
      }
      .animate-card:hover {
         transform: scale(1.02);
         transition: 0.4s;
      }
      .one {
         animation: flipOverY 1.5s;
      }
      .two {
         animation: flipOverX 1.5s;
      }
      .three {
         animation: flipOverYX 2.5s;
      }
      .four {
         animation: flipOverY2 2.5s;
      }
      .five {
         animation: scale 3s;
      }
      @keyframes flipOverY {
         0% {
            transform: rotateY(0deg);
         }
         40% {
            transform: rotateY(180deg);
         }
         50% {
            transform: rotateY(180deg);
         }
         60% {
            transform: rotateY(180deg);
         }
         100% {
            transform: rotateY(0deg);
         }
      }
      @keyframes flipOverX {
         0% {
            transform: rotateX(0deg);
         }
         40% {
            transform: rotateX(180deg);
         }
         50% {
            transform: rotateX(180deg);
         }
         60% {
            transform: rotateX(180deg);
         }
         100% {
            transform: rotateX(0deg);
         }
      }
      @keyframes flipOverYX {
         0% {
            transform: rotateY(0deg) rotateX(0deg);
         }
         40% {
            transform: rotateY(180deg) rotateX(360deg);
         }
         50% {
            transform: rotateY(180deg) rotateX(360deg);
         }
         60% {
            transform: rotateY(180deg) rotateX(360deg);
         }
         100% {
            transform: rotateY(0deg) rotateX(0deg);
         }
      }
      @keyframes flipOverY2 {
         0% {
            transform: rotateY(0deg);
         }
         40% {
            transform: rotateY(540deg);
         }
         50% {
            transform: rotateY(540deg);
         }
         60% {
            transform: rotateY(540deg);
         }
         100% {
            transform: rotateY(0deg);
         }
      }
      @keyframes scale {
         0% {
            transform: scale(1);
         }
         25% {
            transform: scale(0) rotateY(540deg);
         }
         60% {
            transform: scale(1) rotateY(180deg);
         }
         50% {
            transform: scale(1) rotateY(180deg);
         }
         60% {
            transform: scale(1) rotateY(180deg);
         }
         75% {
            transform: rotateX(540deg);
         }
         100% {
            transform: scale(1);
         }
      }
      .animation-one {
         height: 600px;
         display: flex;
         justify-content: center;
         @media (max-width: 940px) {
            height: 400px;
            margin-top: 70px;
         }
      }
      .background-image-grass {
         position: absolute;
         bottom: 0;
         height: 80%;
         animation: grassAnimate 2s infinite;
      }
      .background-image-horse {
         position: absolute;
         bottom: 120px;
         height: 60%;
         animation: horseAnimate 2s infinite;
      }
      @keyframes horseAnimate {
         from {
            transform: translateY(0);
         }
         25% {
            transform: translateY(0);
         }
         50% {
            transform: translateY(20px);
         }
         75% {
            transform: translateY(0);
         }
         to {
            transform: translateY(0);
         }
      }
      @keyframes grassAnimate {
         from {
            transform: translateX(-10px);
         }
         50% {
            transform: translateX(10px);
         }
         to {
            transform: translateX(-10px);
         }
      }
      .animation-two {
         margin-top: 100px;
         height: 400px;
         align-items: center;
         display: flex;
         justify-content: center;
      }
      .ball-jump {
         margin-right: 10px;
         margin-left: 10px;
         transform: translateY(65px);
         background-color: #fff;
         height: 20px;
         width: 20px;
         border-radius: 50%;
         animation: jump 1.5s infinite ease-in-out;
      }
      .ball-jump:nth-child(2) {
         animation-delay: 100ms;
      }
      .ball-jump:nth-child(3) {
         animation-delay: 200ms;
      }
      .ball-jump:nth-child(4) {
         animation-delay: 300ms;
      }
      .ball-jump:nth-child(5) {
         animation-delay: 400ms;
      }
      .ball-jump:nth-child(6) {
         animation-delay: 500ms;
      }
      .ball-jump:nth-child(7) {
         animation-delay: 600ms;
      }
      .ball-jump:nth-child(8) {
         animation-delay: 700ms;
      }
      .ball-jump:nth-child(9) {
         animation-delay: 800ms;
      }
      .ball-jump:nth-child(10) {
         animation-delay: 900ms;
      }
      .ball-jump:nth-child(11) {
         animation-delay: 1000ms;
      }
      .ball-jump:nth-child(12) {
         animation-delay: 1100ms;
      }
      .ball-jump:nth-child(13) {
         animation-delay: 1200ms;
      }
      .ball-jump:nth-child(14) {
         animation-delay: 1300ms;
      }
      .ball-jump:nth-child(15) {
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
      .animation-three {
         margin-top: 100px;
         margin-bottom: 100px;
         height: 500px;
         border-radius: 50%;
         align-items: center;
         margin-left: -350px;
         display: flex;
         justify-content: center;
      }
      .ball-pendulum {
         background-color: rgb(236, 0, 0);
         height: 40px;
         width: 40px;
         border-radius: 50%;
         margin-left: 10px;
         margin-right: 10px;

         transform-origin: 500% center;
         position: absolute;
         animation: pendulum 3.5s infinite ease-in-out;
      }
      .ball-pendulum:nth-child(2) {
         animation-delay: 250ms;
      }
      .ball-pendulum:nth-child(3) {
         animation-delay: 500ms;
      }
      .ball-pendulum:nth-child(4) {
         animation-delay: 750ms;
      }
      .ball-pendulum:nth-child(5) {
         animation-delay: 1000ms;
      }
      .ball-pendulum:nth-child(6) {
         animation-delay: 1250ms;
      }
      .ball-pendulum:nth-child(7) {
         animation-delay: 1500ms;
      }
      @keyframes pendulum {
         to {
            transform: rotate(1turn);
         }
      }
   }
// }
</style>
