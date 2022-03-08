const mk = require("@traptitech/markdown-it-katex");

const customElement = [
  "mi",
  "mo",
  "mn",
  "mrow",
  "annotation",
  "semantics",
  "math",
  "msub",
  "mtext",
];
const isCustomElement = (tag) => {
  return customElement.includes(tag) || tag[0] === "m";
};


module.exports = {
  extendsMarkdown: (md) => {
    md.use(mk);
    md.linkify.set({ fuzzyEmail: false });
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css",
      },
    ],
  ],
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement,
        },
      },
    },
  },
};
