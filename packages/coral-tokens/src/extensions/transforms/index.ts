import { CustomTransformsBuilder } from '@nxkit/style-dictionary';
import { ShadesTransform } from './shades-transform/shades-transform';

const customTransformsBuilder: CustomTransformsBuilder = () => {
  return {
    [ShadesTransform.name]: ShadesTransform.transform,
  };
};

export default customTransformsBuilder;
