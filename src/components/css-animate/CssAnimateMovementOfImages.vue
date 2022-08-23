<template>
   <div>
      <div class="animation-images">
         <img
            class="background-image__grass"
            src="../../assets/img/grass.png"
            alt="background-image"
         />
         <img
            class="background-image__pegas"
            src="../../assets/img/pegas.png"
            alt="background-image"
         />
      </div>
   </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.animation-images {
   margin-top: 100px;
   height: 600px;
   position: relative;
   display: flex;
   justify-content: center;
   @media (max-width: 940px) {
      height: 500px;
   }
   @media (max-width: 750px) {
      height: 350px;
   }
   @media (max-width: 530px) {
      height: 250px;
   }
}
.background-image__grass {
   position: absolute;
   bottom: 0;
   width: 900px;
   animation: grassAnimate 2s infinite;
   @media (max-width: 940px) {
      width: 700px;
   }
   @media (max-width: 750px) {
      width: 500px;
   }
   @media (max-width: 530px) {
      width: 300px;
   }
}
.background-image__pegas {
   position: absolute;
   bottom: 120px;
   width: 900px;
   animation: horseAnimate 2s infinite;
   @media (max-width: 940px) {
      width: 700px;
      bottom: 90px;
   }
   @media (max-width: 750px) {
      width: 500px;
      bottom: 70px;
   }
   @media (max-width: 530px) {
      width: 300px;
      bottom: 50px;
   }
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
</style>
