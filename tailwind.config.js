/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-image": "url('./src/assets/1.webp')", // Define your custom image

        "intro-image": "url('./src/assets/2.webp')", // Define your custom image
      },
    },
  },
  plugins: [],
};
