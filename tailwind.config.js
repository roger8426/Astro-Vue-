/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./src/pages/**/*.{vue,astro}",
    "./src/components/**/*.{vue,astro}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
