import {
  CustomActionsBuilder,
  ExtensionContext,
} from '@nxkit/style-dictionary';
import { NpmModuleAction } from './npm_module_action';

const customActionsBuilder: CustomActionsBuilder = (
  extensionContext: ExtensionContext
) => {
  return {
    [NpmModuleAction.name]: NpmModuleAction.actionBuilder(extensionContext),
  };
};

export default customActionsBuilder;
