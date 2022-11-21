module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      large: "#0e1318",
      medium: "#0d1317",
      primary: "#93E9BE",
      secondary: "#B1D8B7",
      tertiary: "#D4F1F4",
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
