module.exports = {
  css: {
    loaderOptions: {
      scss: { //the change was made here (match the option name with file extension)
        prependData: `
        @import "@/assets/scss/main.scss";
        `
      }
    }
  }
};
