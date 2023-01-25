module.exports = {
  publicPath: '/tech-quiz/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
};
