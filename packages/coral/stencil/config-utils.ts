import { join, resolve } from 'path';

export function getCoralPackagesDistPath() {
  const cwd = process.cwd();
  return resolve(join(cwd, 'dist', 'packages'));
}
