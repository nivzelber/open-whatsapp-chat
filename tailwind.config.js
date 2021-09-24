const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        screen: "calc(var(--vh, 1vh) * 100)"
      }
    }
  },
  variants: {
    extend: {
      display: ["hover"],
      backgroundColor: ["hover"]
    }
  },
  plugins: []
};
