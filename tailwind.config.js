/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        candal: ["Candal"],
        roboto: ["Roboto"],
      },
      colors: {
        hijau: "rgb(215, 245, 220)",
        hmuda: "rgb(250, 255, 251)",
        hfont: "rgb(32, 177, 90)",
        hitam: "rgb(0 0 0)",
        orange: "rgb(245, 95, 29)",
        putih: "rgb(255,255,255)",
        hijau2: "rgb(32, 177, 90)",
        white: { A700: "#ffffff" },
        blue_gray: { 900: "#302f2f" },
        black: {
          900: "#000000",
          "900_94": "#00000094",
          "900_89": "#00000089",
          "900_60": "#00000060",
          "900_dd": "#000000dd",
        },
        green: { A700: "#20b15a" },
        blue: { 900: "#0d47a1" },
        green_800: "#168944",
      },
      spacing: {
        "5rem": "5rem",
        "60vh": "60vh",
        "40vh": "40vh",
        "85vh": "85vh",
        "95vw": "95vw",
      },
      boxShadow: { xs: "0px 3px  49px 9px #0000000f" },
      opacity: { 0.64: 0.64 },
    },
  },
  plugins: [],
};
