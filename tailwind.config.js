/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        brand: "#FD4F00",
        primary: "#8fc600",
        phover: "#8fc600cc",
        fdox: {
          gray: {
            light: "#cccccc",
            dark: "#6f6e6e"
          }
        }
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        serif: ["Inter var", "serif"],
        body: ["Inter var", "sans-serif"],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      }
    },
  },
  plugins: [],
}

