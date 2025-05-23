/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "Segoe UI", "Roboto", "sans-serif"],
        dmsans: ["DM Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
