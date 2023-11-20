/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        "hero-img-1": "url(./assets/header-img-1.png)",
        "hero-img-2": "url(./assets/healthy-juice.png)",
      },
    },
  },
  plugins: [],
};
