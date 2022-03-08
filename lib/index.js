const mk = require("@traptitech/markdown-it-katex");

const customElement = [
  "annotation",
  "semantics",
];
const isCustomElement = (tag) => {
  return tag[0] === "m" || customElement.includes(tag);
};

const head = [[
  "link",
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css",
  },
]];

const bundlerConfig = {
  vuePluginOptions: {
    template: {
      compilerOptions: {
        isCustomElement,
      },
    },
  },
};

module.exports = {
  extendsMarkdown: (md) => {
    md.use(mk);
    md.linkify.set({ fuzzyEmail: false });
  },
  head,
  bundlerConfig,
  isCustomElement,
};
