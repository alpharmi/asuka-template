/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg": "var(--bg)",
        "bg-light": "var(--bg-light)",
        "bg-dark": "var(--bg-dark)",
        "lightpink": "var(--lightpink)",
        "white-10": "var(--white-10)"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
