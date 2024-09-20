/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4175fc",
        secondary: "#f2f4f1",
        accent: "#F5A623",
      },
    },
  },
  plugins: [],
};
