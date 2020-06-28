const customForms = require("@tailwindcss/custom-forms")

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1680px",
      "3xl": "2100px"
    },
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
      },
      maxWidth: {
        "7xl": "85rem",
        "8xl": "100rem"
      },
      height: {
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "70vh": "70vh",
        "80vh": "80vh"
      },
      inset: {
        "-16": "-4rem"
      }
    },
    customForms: theme => ({
      default: {
        "input, textarea, select": {
          borderColor: theme("colors.white"),
          borderRadius: theme("borderRadius.sm"),
          backgroundColor: theme("colors.white"),
          boxShadow: theme("boxShadow.default"),
          "&:hover": {
            boxShadow: theme("boxShadow.md")
          },
          "&:focus": {
            borderColor: theme("colors.gray.300"),
            boxShadow: theme("boxShadow.md")
          }
        },
        "checkbox, radio": {
          borderRadius: theme("borderRadius.sm"),
          backgroundColor: theme("colors.white"),
          width: theme("spacing.6"),
          height: theme("spacing.6"),
          boxShadow: theme("boxShadow.default"),
          "&:hover:not(:checked)": {
            boxShadow: theme("boxShadow.md")
          },
          "&:checked, &:focus": {
            borderColor: theme("colors.gray.300"),
            color: theme("colors.green.800"),
            boxShadow: theme("boxShadow.md")
          }
        }
      }
    })
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus", "active"],
    translate: ["responsive", "hover", "focus", "active"]
  },
  plugins: [customForms],
  // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  purge: ["./**/*.vue", "../nuxt.config.js"]
}
