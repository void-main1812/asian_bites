/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // these properties extends the existing tailwind properties

    },
    // if you don't want to extend the existing tailwind properties you can add your own properties here

  },
  plugins: [
    // add your custom plugins here
  ],
}

