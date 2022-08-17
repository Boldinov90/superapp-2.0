<template>
   <div class="toggle-switch">
      <label class="label-toggle">
         <input class="input-toggle" type="checkbox" />
         <span class="toggle"></span>
      </label>
   </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.toggle-switch {
   position: relative;
   width: 55px;
   display: grid;
   align-items: center;
}

.label-toggle {
   position: absolute;
   width: 100%;
   height: 30px;
   background-color: $background-color-overlay;
   border-radius: 50px;
   cursor: pointer;
}

.input-toggle {
   position: absolute;
   display: none;
}

.toggle {
   position: absolute;
   width: 100%;
   height: 100%;
   border-radius: 50px;
   transition: 0.3s;
}

.input-toggle:checked ~ .toggle {
   background-color: $background-color-dark-overlay;
}

.toggle::before {
   content: '';
   position: absolute;
   top: 4px;
   left: 5px;
   width: 22px;
   height: 22px;
   border-radius: 50%;
   box-shadow: none;
   background-color: $accent-color;
   transition: 0.3s;
}

.input-toggle:checked ~ .toggle::before {
   transform: translateX(23px);
   background-color: $background-color-dark-overlay;
   box-shadow: inset -8px 0px 0px 0px $accent-color;
}
</style>
