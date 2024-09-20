/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cuPink: "#FF009D",
        cuBlack: "#1E1E1E",
        cuBlue: "#0FF1FD",
        cuPurple: "#2F2DA2",
      },
    },
  },
  plugins: [],
};
