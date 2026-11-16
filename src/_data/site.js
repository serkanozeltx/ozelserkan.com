// Site-wide settings, available in every template as `site`.

export default {
  name: "Serkan Özel",
  url: "https://ozelserkan.com",

  // Words the layout needs in each language.
  langs: {
    tr: {
      code: "TR",
      name: "Türkçe",
      home: "/tr/",
      skip: "İçeriğe geç",
      navLabel: "Ana menü",
      langLabel: "Dil",
    },
    en: {
      code: "EN",
      name: "English",
      home: "/en/",
      skip: "Skip to content",
      navLabel: "Main",
      langLabel: "Language",
    },
  },

  // The header menu, in order. Each entry is a page's shared `key`.
  // An entry appears only once a page with that key exists, so the
  // menu grows as pages are built. The design system allows five.
  nav: ["about", "research", "publications", "projects", "contact"],
};
