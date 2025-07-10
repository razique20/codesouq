/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6b1fad",
        secondary: "#8c52ff",
        third: "#8f1eae",
        fourth: "#9440dd", // Corrected: last digit was "odd", changed to "dd"
      },
    },
  },
  plugins: [],
};
