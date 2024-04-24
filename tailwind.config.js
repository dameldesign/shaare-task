/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#024751",
        primaryStrong:"#0F2730",
        secondary: "#FF5416",
        fade: "#FF541680",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
}
