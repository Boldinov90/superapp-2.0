<template>
   <div class="welcome animate__animated animate__fadeIn">
      <h1 class="welcome__title animate__animated animate__fadeInLeft">
         Привет!
      </h1>
      <p
         class="welcome__subtitle animate__animated animate__fadeIn animate__delay-1s"
      >
         Добро пожаловать в мое первое приложение, не имеющее абсолютно никакой
         смысловой нагрузки, созданное исключительно ради практики, демонстрации
         навыков и на потеху опытным разработчикам.
      </p>
      <p
         class="welcome__subtitle animate__animated animate__fadeIn animate__delay-2s"
      >
         Back End написан на Nest.js с помощью NEST/CLI. Применены инструменты:
         typeScript, jwt, passport, mongoose/typegoose, bcrypt, validator. В
         качестве BD используется MongoDB.<br />
         Front End написан на Vue.js с помощью VUE/CLI. Применены инструменты:
         VUEX, VUE-Router, SASS/SCSS, Axios, Animate.css и Google естественно,
         куда же без него &#128521;
      </p>
      <div
         class="welcome__images images animate__animated animate__fadeIn animate__delay-3s"
      >
         <img
            src="../assets/img/Google-logo.png"
            alt="picture"
            class="images__google-logo"
         />
         <img
            src="../assets/img/travolta.gif"
            alt="picture"
            class="images__travolta"
         />
      </div>
   </div>
</template>

<script>
import 'animate.css'
import { mapGetters } from 'vuex'
export default {
   computed: {
      ...mapGetters(['IS_DARK_THEME']),
   },
}
</script>

<style scoped lang="scss">
.welcome {
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 0 50px 0;
   .welcome__title {
      color: $accent-color;
      margin-top: 100px;
   }
   .welcome__subtitle {
      margin-top: 40px;
      max-width: 800px;
      line-height: 1.6;
      letter-spacing: 1.1px;
      color: $text-menu-color;
      --animate-delay: 0.5s;
   }
   .welcome__images {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      --animate-delay: 0.5s;
      .images__google-logo {
         width: 400px;
         @media (max-width: 730px) {
            width: 250px;
         }
         @media (max-width: 440px) {
            width: 150px;
         }
      }
      .images__travolta {
         @media (max-width: 730px) {
            width: 130px;
         }
         @media (max-width: 440px) {
            width: 110px;
         }
      }
   }
}
</style>