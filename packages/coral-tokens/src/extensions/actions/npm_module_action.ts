import { ExtensionContext } from '@nxkit/style-dictionary';
import { Action, Dictionary, Platform } from 'style-dictionary';
import * as fs from 'fs-extra';
import { join } from 'path';

export function copyNpmModuleFilesAction(
  extensionContext: ExtensionContext
): Action {
  const { projectRoot } = extensionContext.options;

  const addFile = (file: string, targetDirectory: string) => {
    console.log(`Adding ${file} to ${targetDirectory}`);
    const source = join(projectRoot, file);
    const target = join(targetDirectory, file);
    fs.copySync(source, target);
  };

  const removeFile = (file: string, fileLocation: string) => {
    console.log(`Removing ${file} from ${fileLocation}`);
    const target = join(fileLocation, file);
    fs.removeSync(target);
  };

  const files = ['README.md', 'package.json', 'index.js'];

  return {
    do: (dictionary: Dictionary, config: Platform) => {
      const { buildPath } = config;
      files.forEach((file) => addFile(file, buildPath));
    },
    undo: (dictionary: Dictionary, config: Platform) => {
      const { buildPath } = config;

      console.log('Removing npm module files from ' + buildPath);
      files.forEach((file) => removeFile(file, buildPath));
    },
  };
}
