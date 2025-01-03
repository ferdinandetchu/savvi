/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    // "./node_modules/flowbite/**/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
    // colors: {
    //   primary: "#0560B1",
    //   white: "#ffffff",
    //   secondary: {
    //     100: "#01DCFA",
    //     200: "#6becfd",
    //     300: "#85eefc",
    //     400: "#baf7ff",
    //   },
    // },
  },
  fontFamily: {
    body: [
      "Montserrat",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ],
    sans: [
      "Montserrat",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ],
  },
  //   plugins: [require("@tailwindcss/forms")],
};
