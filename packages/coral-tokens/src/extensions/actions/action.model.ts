import { ExtensionContext } from '@nxkit/style-dictionary';
import { Action } from 'style-dictionary';

export interface CustomAction {
  name: string;
  actionBuilder: (extensionContext: ExtensionContext) => Action;
}
