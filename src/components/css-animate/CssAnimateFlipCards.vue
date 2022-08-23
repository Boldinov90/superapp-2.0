<template>
   <div>
      <div class="animate-cards">
         <div class="animate-card__wrapper">
            <div
               class="animate-card"
               :class="[animateCardOne.isClick ? 'one' : '']"
               @click.prevent="flipOverCard(animateCardOne)"
            >
               <div class="card animate-card__one-front">
                  {{ animateCardOne.text }}
               </div>
               <div class="card animate-card__one-back">
                  {{ animateCardOne.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card__wrapper">
            <div
               class="animate-card"
               :class="[animateCardTwo.isClick ? 'two' : '']"
               @click.prevent="flipOverCard(animateCardTwo)"
            >
               <div class="card animate-card__two-front">
                  {{ animateCardTwo.text }}
               </div>
               <div class="card animate-card__two-back">
                  {{ animateCardTwo.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card__wrapper">
            <div
               class="animate-card"
               :class="[animateCardThree.isClick ? 'three' : '']"
               @click.prevent="flipOverCard(animateCardThree)"
            >
               <div class="card animate-card__three-front">
                  {{ animateCardThree.text }}
               </div>
               <div class="card animate-card__three-back">
                  {{ animateCardThree.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card__wrapper">
            <div
               class="animate-card"
               :class="[animateCardFour.isClick ? 'four' : '']"
               @click.prevent="flipOverCard(animateCardFour)"
            >
               <div class="card animate-card__four-front">
                  {{ animateCardFour.text }}
               </div>
               <div class="card animate-card__four-back">
                  {{ animateCardFour.textIfClick }}
               </div>
            </div>
         </div>
         <div class="animate-card__wrapper">
            <div
               class="animate-card"
               :class="[animateCardFive.isClick ? 'five' : '']"
               @click.prevent="flipOverCard(animateCardFive)"
            >
               <div class="card animate-card__five-front">
                  {{ animateCardFive.text }}
               </div>
               <div class="card animate-card__five-back">
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
.animate-cards {
   margin-top: 50px;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
   .animate-card__wrapper {
      margin-top: 50px;
      margin-left: 20px;
      margin-right: 20px;
      width: 200px;
      height: 300px;
      perspective: 1000px;
      .animate-card {
         width: 100%;
         height: 100%;
         position: relative;
         transform-style: preserve-3d;
         transition: transform 0.2s;
         &:hover {
            transform: scale(1.02);
            transition: 0.4s;
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
         .animate-card__one-front {
            background-color: rgb(224, 106, 59);
         }
         .animate-card__one-back {
            background-color: rgb(224, 106, 59);
            transform: rotateY(180deg);
         }
         .animate-card__two-front {
            background-color: rgb(4, 150, 218);
         }
         .animate-card__two-back {
            background-color: rgb(4, 150, 218);
            transform: rotateX(180deg);
         }
         .animate-card__three-front {
            background-color: rgb(214, 88, 204);
         }
         .animate-card__three-back {
            background-color: rgb(214, 88, 204);
            transform: rotateY(180deg);
         }
         .animate-card__four-front {
            background-color: rgb(88, 214, 172);
         }
         .animate-card__four-back {
            background-color: rgb(88, 214, 172);
            transform: rotateY(180deg);
         }
         .animate-card__five-front {
            background-color: rgb(223, 222, 138);
         }
         .animate-card__five-back {
            background-color: rgb(223, 222, 138);
            transform: rotateY(180deg);
         }
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
   }
}
</style>
