import { ExtensionContext } from '@nxkit/style-dictionary';
import { Action, Dictionary, Platform } from 'style-dictionary';
import * as fs from 'fs-extra';
import * as path from 'path';

export function copyNpmModuleFilesAction(
  extensionContext: ExtensionContext
): Action {
  const { projectRoot } = extensionContext.options;

  const readmePath = path.join(projectRoot, 'README.md');
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const indexPath = path.join(projectRoot, 'index.js');

  return {
    do: (dictionary: Dictionary, config: Platform) => {
      const { buildPath } = config;
      console.log('Copying README file to ' + config.buildPath);
      fs.copySync(readmePath, path.join(buildPath, 'README.md'));
      console.log('Copying package.json file to ' + config.buildPath);
      fs.copySync(packageJsonPath, path.join(buildPath, 'package.json'));
      console.log('Copying index.js file to ' + config.buildPath);
      fs.copySync(indexPath, path.join(buildPath, 'index.js'));
    },
    undo: (dictionary: Dictionary, config: Platform) => {
      const { buildPath } = config;

      console.log('Removing npm module files from ' + buildPath);
      fs.removeSync(path.join(buildPath + 'README.md'));
      fs.removeSync(path.join(buildPath + 'package.json'));
    },
  };
}
