<div align="right">
    <img src="https://raw.githubusercontent.com/webcomponents/webcomponents-icons/master/logo/logo_512x512.png" alt="WebComponents.org Logo" itemprop="image" width="50" align="right"/>
    <img src="https://github.com/divetool/coral/raw/main/docs/coral-logo.png" alt="Coral logo" title="Coral" width="50" align="right" style="margin-right: 1rem;"/>
</div>

[![CI](https://github.com/divetool/coral/actions/workflows/ci.yml/badge.svg)](https://github.com/divetool/coral/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@divetool/coral?color=green&label=%40divetool%2Fcoral&logo=npm)](https://www.npmjs.com/@divetool/coral)

# Coral Vanilla Web Components

The Coral's web components are built using **StencilJS**. Read more about it in the [StencilJS website](https://stenciljs.com/).

## Documentation

Read the full docs at https://divetool.github.io/coral

## Getting started

You can start using Coral's web components via 2 methods.

### Using the npm module

Install the `@divetool/coral` package

```bash
npm install @divetool/coral
```

Define Coral components to be used as web-components in your HTML

```typescript
import { defineCustomElements, applyPolyfills } from '@divetool/coral/loader';

// Define all Coral custom elements
defineCustomElements();

// Or if you need pollyfills to work with custom elements:
applyPolyfills().then(() => {
  defineCustomElements();
});
```

You can also define a single component:

```typescript
import { defineCustomElement as defineCrlButton } from '@divetool/coral/dist/components/crl-button';

// Define CrlButton component
defineCrlButton();
```

In your HTML:

```html
<html>
  <body>
    <crl-button>Click me</crl-button>
  </body>
</html>
```

### Script tag or native ESmodule

You can load Coral web components in a website/application by adding the following script tag:

[Unpkg CDN](https://unpkg.com/):

```html
<script
  type="module"
  src="https://unpkg.com/@divetool/coral/dist/coral/coral.esm.js"
  defer
></script>
```

[jsDelivr CDN](https://www.jsdelivr.com/):

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@divetool/coral/dist/coral/coral.esm.js"
  defer
></script>
```

Your HTML will look similar to this

```html
<html>
  <head>
    <script
      type="module"
      src="https://unpkg.com/@divetool/coral/dist/coral/coral.esm.js"
      defer
    ></script>
  </head>
  <body>
    <crl-button>Click me</crl-button>
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement:

```html
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://unpkg.com/@divetool/coral/loader/index.js';
      defineCustomElements();
    </script>
  </head>
  <body>
    <crl-button>Click me</crl-button>
  </body>
</html>
```

## License

This project is licensed under the **MIT License**.

See [LICENSE](https://github.com/divetool/coral/blob/main/LICENSE) for more information.
