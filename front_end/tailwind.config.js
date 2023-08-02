module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        
        page: "rgb(var(--color-page) / <alpha-value>)",
        large: "rgb(var(--color-large) / <alpha-value>)",
        medium: "rgb(var(--color-medium) / <alpha-value>)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        character: "rgb(var(--color-character) / <alpha-value>)",
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
