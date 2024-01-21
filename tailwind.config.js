/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#fbf8cc",
        "dark-brown": "#474306",
        "dark-blue": "#03045e",
        yellow: "#f5ee84",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "port-lligat-slab": "'Port Lligat Slab'",
        "port-lligat-sans": "'Port Lligat Sans'",
        poly: "Poly",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "81xl": "100px",
      "11xl": "30px",
      "31xl": "50px",
      lg: "18px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
