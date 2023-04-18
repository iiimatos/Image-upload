/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { left: "-25%" },
          "50%": { left: "95%" },
          "100%": { left: "-25%" },
        },
      },
      animation: {
        loading: "loading 3s linear infinite",
      },
    },
  },
  plugins: [],
};
