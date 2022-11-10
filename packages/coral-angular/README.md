<div align="right">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" itemprop="image" width="50" align="right">
    <img src="https://github.com/divetool/coral/raw/main/docs/coral-logo.png" alt="Coral logo" title="Coral" width="50" align="right" style="margin-right: 1rem;"/>
</div>

[![CI](https://github.com/divetool/coral/actions/workflows/ci.yml/badge.svg)](https://github.com/divetool/coral/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@divetool/coral-angular?color=green&label=%40divetool%2Fcoral-angular&logo=npm)](https://www.npmjs.com/@divetool/coral-angular)

# Coral Angular Components

The Coral's Angular components are built using **StencilJS**. Read more about it in the [StencilJS website](https://stenciljs.com/).

## Documentation

Read the full docs at https://divetool.github.io/coral

## Getting started

To start using Coral's Angular components, start by installing `@divetool/coral-angular` in your Angular project.

```bash
npm install @divetool/coral-angular
```

Then add the `CoralAngularModule` to your NgModule.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoralAngularModule } from '@divetool/coral-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [CoralAngularModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

You are now able to use Coral components in your Angular component templates:

```html
<crl-button variant="secondary" [disabled]="isDisabled"> Click me </crl-button>
```

## License

This project is licensed under the **MIT License**.

See [LICENSE](https://github.com/divetool/coral/blob/main/LICENSE) for more information.
