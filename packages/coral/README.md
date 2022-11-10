<div align="right">
    <img src="https://raw.githubusercontent.com/webcomponents/webcomponents-icons/master/logo/logo_512x512.png" alt="WebComponents.org Logo" itemprop="image" width="50" align="right">
    <img src="https://github.com/divetool/coral/raw/main/docs/coral-logo.png" alt="Coral logo" title="Coral" width="50" align="right" style="margin-right: 1rem;"/>
</div>

[![CI](https://github.com/divetool/coral/actions/workflows/ci.yml/badge.svg)](https://github.com/divetool/coral/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@divetool/coral?color=green&label=%40divetool%2Fcoral&logo=npm)](https://www.npmjs.com/@divetool/coral)

# Coral Vanilla Web Components

The Coral's web components are built using [StencilJS](https://stenciljs.com/) read more about Stencil in their website.

## Documentation

Read the full docs at https://divetool.github.io/coral

## Getting started

You can start using Coral's web components via 2 methods.

### Using the npm module

Install the `@divetool/coral` package

```bash
npm install @divetool/coral
```

```typescript
import { defineCustomElements, applyPolyfills } from '@divetool/coral/loader';

// Define all Coral custom elements
defineCustomElements();

// Or if you need pollyfills to work with custom elements:
applyPolyfills().then(() => {
  defineCustomElements();
});
```

```typescript
import { defineCustomElements, applyPolyfills } from '@divetool/coral/loader';

// Define all Coral custom elements
defineCustomElements();

// Or if you need pollyfills to work with custom elements:
applyPolyfills().then(() => {
  defineCustomElements();
});
```

In your HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <crl-button>Click me</crl-button>
  </body>
</html>
```

### Script tag or native ESmodule

```html
<!DOCTYPE html>
<html lang="en">
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

You can alternatively use the [jsDelivr](https://www.jsdelivr.com/) CDN url:

```
https://cdn.jsdelivr.net/npm/@divetool/coral/dist/coral/coral.esm.js
```
