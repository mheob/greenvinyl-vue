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
      colors: {
        green: {
          100: "#f6fbf4",
          200: "#ecf6e7",
          300: "#cee9c2",
          400: "#2E9471",
          500: "#007D52",
          600: "#00724B",
          700: "#006744",
          800: "#005B3C",
          900: "#005035"
        }
      },
      borderWidth: {
        3: "3px"
      }
    }
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus", "active"],
    translate: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
}
