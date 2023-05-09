/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2b0552",
        secondary: "#b6f743",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://img.freepik.com/free-vector/vector-abstract-wave-background-blue-waves-background_1142-9675.jpg?w=996&t=st=1682235066~exp=1682235666~hmac=3a7791cff741c3bdd9dddd9a993c86ee8abaa495e9a137f7b539ed114cb125e9')",
      },
    },
  },
  plugins: [],
};
