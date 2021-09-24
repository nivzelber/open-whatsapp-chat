module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        screen: "calc(var(--vh, 1vh) * 100)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
