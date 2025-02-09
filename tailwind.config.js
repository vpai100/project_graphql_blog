module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
        fontFamily: {
          manrope: "Manrope",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["@tailwindcss/forms", "@tailwindcss/jit"],
};
