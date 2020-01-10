/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true
    },

    extend: {
      fontFamily: {
        logo: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"]
      },
      colors: {
        "skin-pink": "#F2C6BD"
      },
      width: {
        "72": "18rem",
        "80": "20rem",
        "104": "26rem"
      }
    }
  },
  variants: {},
  plugins: []
};
