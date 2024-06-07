/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        FEDarkBlue: "hsl(209, 23%, 22%)",
        FEVeryDarkBlue: "hsl(207, 26%, 17%)",
        FEDarkBlue: "hsl(200, 15%, 8%)",
        FEDarkGray: "hsl(0, 0%, 52%)",
        FEVeryLightGray: "hsl(0, 0%, 98%)",
        FEWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
