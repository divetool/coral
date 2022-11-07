import { CustomTransform } from '../transform.model';
import { colorTransform } from './color-transform';

export const ShadesTransform: CustomTransform = {
  name: 'shades-transform',
  transform: {
    type: `value`,
    // only transforms that have transitive: true will be applied to tokens
    // that alias/reference other tokens
    transitive: true,
    matcher: (token) => token?.attributes?.category === 'color' && token.modify,
    transformer: colorTransform,
  },
};
