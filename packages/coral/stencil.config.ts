import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
import {
  vanillaExtractRollupPlugin,
  vanillaExtractStencilPlugin,
} from 'stencil-vanilla-extract-plugin';
// import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'coral',
  taskQueue: 'async',
  plugins: [vanillaExtractStencilPlugin()],
  rollupPlugins: {
    before: [vanillaExtractRollupPlugin()],
  },
  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@divetool/coral',
      proxiesFile: '../../../packages/coral-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@divetool/coral/dist',
      directivesProxyFile:
        '../../../packages/coral-angular/src/lib/generated/components.ts',
      directivesArrayFile:
        '../../../packages/coral-angular/src/lib/generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      includeImportCustomElements: true,
    }),
  ],
  preamble: `Built with Stencil   - https://stenciljs.com/
Copyright © DiveTool - http://github.com/divetool
MIT License`,
};
