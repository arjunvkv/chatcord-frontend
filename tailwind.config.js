/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainback: "#004D73",
        chatbox: "#FFE4DF",
        labelandbutton: "#93524F",
        label: "#e06e6e",
      },
      keyframes: {
        showusers: {
          "0%": { transform: "translateX(32px)", opacity: 0, display: "none" },
          "100%": { transform: "translateX(0px)", opacity: 1, display: "flex" },
        },
        hideusers: {
          "0%": { transform: "translateX(0px)", opacity: 1, display: "flex" },
          "100%": {
            transform: "translateX(32px)",
            opacity: 0,
            display: "none",
          },
        },
        showrooms: {
          "0%": { transform: "translateX(-32px)", opacity: 0, display: "none" },
          "100%": { transform: "translateX(0px)", opacity: 1, display: "flex" },
        },
        hiderooms: {
          "0%": { transform: "translateX(0px)", opacity: 1, display: "flex" },
          "100%": {
            transform: "translateX(-32px)",
            opacity: 0,
            display: "none",
          },
        },
      },
      animation: {
        showusers: "showusers 0.1s ease-in-out forwards",
        hideusers: "hideusers 0.1s ease-in-out forwards",
        showrooms: "showrooms 0.1s ease-in-out forwards",
        hiderooms: "hiderooms 0.1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
