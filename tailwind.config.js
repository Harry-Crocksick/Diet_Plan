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
        "hero-img-1":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), transparent), url(/assets/header-img-1.png)",
        "hero-img-2":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), transparent), url(/assets/healthy-juice.png)",
        "about-hero-img-1": "url(/assets/hero-image-2.png)",
        "about-hero-img-2": "url(/assets/about-hero-2.png)",
        "contact-hero-img-1": "url(/assets/contact-hero-1.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
