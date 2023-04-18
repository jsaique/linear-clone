/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: `"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif`,
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.2rem",
      "5xl": "4rem",
      "6xl": ["4.4rem", "1"],
      "7xl": ["4.8rem", "1"],
      "8xl": ["8rem", "1"],
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      "off-white": "#f7f8f8",
      "transparent-white": "rgba(255,255,255, 0.08)",
      background: "#000212",
      subtitle: "#b4bcd0",
      grey: "#8a8f98",
      "grey-dark": "#222326",
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8remm",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      "navigation-height": "var(--navigation-height)",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
    transitionDelay: {
      0: "0ms",
    },
    // Page animation
    keyframes: {
      "fade-in": {
        from: {
          opacity: 0,
          transform: "translateY(-10px)",
        },
        to: {
          opacity: 1,
          transform: "none",
        },
      },
    },
    animation: {
      // Adds delay to the animation
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease",
    },
  },
  plugins: [],
};
