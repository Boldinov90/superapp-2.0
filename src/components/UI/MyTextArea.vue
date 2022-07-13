<template>
   <div class="input-group">
      <textarea
         id="input"
         type="text"
         :placeholder="textPlaceholder"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
      />
   </div>
</template>

<script>
export default {
   props: {
      textPlaceholder: {
         type: String,
      },
      modelValue:{
         type: String
      }
   },
}
</script>

<style lang="scss" scoped>
.input-group {
   textarea {
      width: 100%;
      padding: 10px 10px;
      font-size: 14px;
      border: 1px solid rgba(157, 157, 157, 0.301);
      border-radius: 4px;
      resize: none;
   }
}
</style>