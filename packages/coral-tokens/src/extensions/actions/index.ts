import {
  CustomActionsBuilder,
  ExtensionContext,
} from '@nxkit/style-dictionary';
import { copyNpmModuleFilesAction } from './npm_module_action';

const customActionsBuilder: CustomActionsBuilder = (
  extensionContext: ExtensionContext
) => {
  return {
    generate_npm_module: copyNpmModuleFilesAction(extensionContext),
  };
};

export default customActionsBuilder;
