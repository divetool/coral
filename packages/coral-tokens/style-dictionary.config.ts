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
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
};

export default config;
