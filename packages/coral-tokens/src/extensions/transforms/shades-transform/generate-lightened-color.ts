// #NOTE: https://github.com/amzn/style-dictionary/tree/main/examples/advanced/transitive-transforms

import * as chroma from 'chroma-js';

const setHslColor = (color: chroma.Color, lightness: number) => {
  const [h, s] = color.hsl();
  return chroma(h, s, lightness / 100, 'hsl');
};

export const generateLightenedColor = (token) => {
  const { value, modify } = token;
  let color = chroma(value);
  color = setHslColor(color, modify.amount);
  return color.hex();
};
