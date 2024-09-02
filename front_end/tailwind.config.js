module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: ["selector","[data-theme*='dark']"], // or 'media' or 'class'
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
        ambient: "rgb(var(--color-ambient) / <alpha-value>)",
        
      },
    },
    backgroundImage:{
      'radial-gradient-top': 'radial-gradient(125% 125% at 50% 90%, rgba(var(--color-page)) 40%, rgba(var(--color-ambient)) 100%)',
      'radial-gradient-bottom': 'radial-gradient(125% 125% at 50% 10%, rgba(var(--color-page)) 40%, rgba(var(--color-ambient)) 100%)',
      // 'spotted-background':'bg-[#000000] bg-[radial-gradient(#ffffff33_1px,rgba(var(--color-page))_1px)] bg-[size:20px_20px]',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
