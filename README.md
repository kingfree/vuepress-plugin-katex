# KaTeX Plugin for VuePress

## Install

```bash
npm install -D vuepress-plugin-katex
```

## Usage

In your `.vuepress/config.ts`:

```ts
import { bundlerConfig, head } from "vuepress-plugin-katex";

module.exports = {
  // ...
  plugins: ["katex"],
  head,
  bundlerConfig,
  // ...
}
```

Or, with your own header & bundler configurations:

```ts
import { isCustomElement, head } from "vuepress-plugin-katex";

module.exports = {
  // ...
  plugins: ["katex"],
  head: [...head],
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement
        }
      }
    }
  }
  // ...
}
```
