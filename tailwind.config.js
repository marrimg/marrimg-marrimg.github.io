module.exports = {
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.js", // Scans your vanilla JS files for dynamic classes
  ],
  theme: {
    extend: {
      colors: {
        pageBg: "#0b1d41",
        sectionBg: "#0b2352",
        textCallout: "#8c40ff",
        link: "#806ded",
        linkHover: "#6149e9",
        linkSecondary: "#5181e1",
        linkSecondaryHover: "#8c40ff",
        text: "#acacd0",
        header: "#acacd0",
        antimatterBrand: "#932eb8",
        antimatterBg: "#16171d",
      },
    },
  },
  plugins: [],
};
