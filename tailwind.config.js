module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      fontFamily: {
        sans: [
          "Open Sans",
          "Arial",
          "Helvetica",
          "Nimbus Sans L",
          "sans-serif",
        ],
      },
      colors: {
        // Dept of CS gray
        csgray: "#f8f8f8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
