module.exports = {
   css: {
      loaderOptions: {
         scss: {
            // additionalData: `@import "./src/scss/base.scss";`,
            prependData: `@import "@/scss/base.scss";`,
         },
      },
   },
}

