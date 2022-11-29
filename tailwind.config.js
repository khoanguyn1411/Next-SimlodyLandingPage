module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          10: "#e2f6f838",
          50: "#E2F6F8",
          100: "#B5E7EE",
          200: "#88D7E4",
          300: "#5EC7DC",
          400: "#40BBD8",
          500: "#22B0D6",
          600: "#16A2C8",
          700: "#008FB7",
          800: "#007EA4", // Primary
          900: "#005E84",
        },
        secondary: {
          50: "#FEECEF",
          100: "#FDD0D3",
          200: "#EDA09D",
          300: "#E27C78",
          400: "#EC6056", // Primary
          500: "#F0533D",
          600: "#E24B3C",
          700: "#D04236",
          800: "#C33C30",
          900: "#B43224",
        },
      },
      height: {
        main: "calc(100vh - 56px)",
        section: "calc(100vh - 56px)",
        header: "4.5rem",
      },
      lineClamp: {
        10: "10",
        2: "2",
        3: "3",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
