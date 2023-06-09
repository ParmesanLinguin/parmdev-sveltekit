/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ["Libre Franklin", "sans-serif"]
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
