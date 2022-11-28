// Imports the Storybook's configuration and options API
import type { Options, StorybookConfig } from '@storybook/core-common';
import { logger } from '@storybook/node-logger';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration, RuleSetRule } from 'webpack';
import { config as rootMain } from '../../../.storybook/main';
import { filterByLoaderName } from './utils/webpack-module-rules';

/**
 * @see https://github.com/storybookjs/storybook/blob/main/docs/configure/overview.md#using-storybook-api
 * @see https://github.com/storybookjs/storybook/blob/main/lib/client-logger/src/index.ts
 */
export default {
  ...rootMain,
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: false,
        lazyCompilation: false,
      },
    },
  },
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  // @see https://github.com/storybookjs/storybook/blob/main/docs/configure/overview.md#feature-flags
  features: {
    babelModeV7: true,
    storyStoreV7: true,
  },
  framework: '@storybook/html',
  logLevel: 'warn',
  webpackFinal: async (
    config: Configuration,
    options: Options
  ): Promise<Configuration> => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, options);
    }

    // `options.configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const { resolve, module } = config;
    if (!resolve)
      throw new Error(
        `No resolve object assigned to Webpack's config. This is needed for Storybook.`
      );

    // Make whatever fine-grained changes you need
    const customPlugins = [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.base.json',
        extensions: resolve.extensions,
        mainFields: resolve.mainFields as string[],
      }),
    ];

    resolve.plugins
      ? resolve.plugins.push(...customPlugins)
      : (resolve.plugins = [...customPlugins]);

    module?.rules?.forEach((rule: RuleSetRule | '...') => {
      // modify all 'babel-loader' occurrences by setting rootMode to 'upward'. this is needed in
      // babel 7+ to include any Nx projects having a `.babelrc.json` file to be processed. these files
      // must enable `onlyRemoveTypeImports` for stencil's 'h' module is not removed in stories.
      filterByLoaderName(rule, 'babel-loader')?.forEach(
        (ele) => (ele.options = { ...ele.options, rootMode: 'upward' })
      );
    });

    const instance = (await options.presets.apply('webpackInstance')) as any;
    logger.info(`=> Running in webpack instance: ${instance?.version}`);

    // Return the altered config
    return config;
  },
} as StorybookConfig;
