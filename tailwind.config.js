/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./src/pages/**/*.{vue,astro}",
    "./src/components/**/*.{vue,astro}",
  ],
  theme: {
  	extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
