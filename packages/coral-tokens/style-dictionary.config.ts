import { Config } from 'style-dictionary';

const config: Config = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'scss/',
      transforms: [
        `attribute/cti`,
        `name/cti/kebab`,
        `shades-transform`,
        `color/hex`,
      ],
      files: [
        {
          destination: '_typography.scss',
          format: 'scss/variables',
          filter: {
            attributes: {
              category: 'font_size',
            },
          },
        },
        {
          destination: '_colors.scss',
          format: 'scss/variables',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'js/',
      transforms: [
        `attribute/cti`,
        'name/cti/camel',
        `shades-transform`,
        `color/hex`,
      ],
      files: [
        {
          format: 'javascript/es6',
          destination: 'typography.js',
          filter: {
            attributes: {
              category: 'font_size',
            },
          },
        },
        {
          format: 'javascript/es6',
          destination: 'color.js',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
      ],
    },
    typings: {
      buildPath: '/',
      transformGroup: 'js',
      files: [
        {
          destination: 'index.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    'npm-module': {
      buildPath: '/',
      actions: ['generate_npm_module'],
    },
  },
};

export default config;
