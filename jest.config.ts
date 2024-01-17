import { compilerOptions } from "./tsconfig.json"
import type { Config } from '@jest/types';
type PathsObject = { [key: string]: string | string[] };

function makeModuleNameMapper(srcPath: string) {
  // Get paths from tsconfig
  const { paths } = compilerOptions;
  function processPath(value: [string, string[]]){
    const regex = `^${value[0].replace(/[@.*+?^${}()|[\]\\]/g, '\\$&')}/(.*)$`;
    const replacement = `<rootDir>${value[1]}/$1`;
    return { [regex] : replacement} as { [key: string]: string | string[]};
  }
  const aliases = Object.entries(paths).map(processPath);
  return aliases;
}

const SRC_PATH = "<rootDir>";
const config: Config.InitialOptions = {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "roots": [
    "<rootDir>"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "moduleNameMapper": makeModuleNameMapper(SRC_PATH),
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "lib"
  ],
  "moduleDirectories": ["node_modules", "<rootDir>"],
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
};

export default config;