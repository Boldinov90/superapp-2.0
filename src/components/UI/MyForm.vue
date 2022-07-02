<template>
   <div class="form-overvay">
      <form class="form">
         <div class="form__title">{{ formTitle }}</div>
         <slot />
      </form>
   </div>
</template>

<script>
export default {
   props: {
      formTitle: {
         type: String,
      },
   },
}
</script>

<style lang="scss" scoped>
.form-overvay {
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background-color: rgba(255, 255, 255, 0.712);
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
}
</style>
