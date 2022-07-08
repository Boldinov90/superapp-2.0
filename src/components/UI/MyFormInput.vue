<template>
   <div class="input-group">
      <label for="input">{{ textLabel }}</label>
      <input
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
      textLabel: {
         type: String,
      },
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
   display: flex;
   flex-direction: column;
   label {
      margin-bottom: 7px;
   }
   input {
      padding: 10px 10px;
      font-size: 18px;
      border: 1px solid rgba(157, 157, 157, 0.301);
      border-radius: 4px;
   }
}
</style>
