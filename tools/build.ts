import { join } from 'path';
import { spawn } from 'cross-spawn';
import { copy, writeFile } from 'fs-extra';
import { keys as tsKeys } from 'ts-transformer-keys';

interface OverrideOptions {
    exportName?: string;
    zoneWrap?: string;
    blockUntilFirst?: boolean;
    override?: boolean;
}

type ToBeExported = [string, string, boolean][];

function zoneExports() {
    const reexport = async (module: string, name: string, path: string, exports: string[], overrides: Record<string, OverrideOptions | null> = {}) => {
        const imported = await import(path);
        const toBeExported: ToBeExported = exports.
        filter(it => !it.startsWith('_') && overrides[it] !== null && overrides[it]?.override !== true).
        map(importName => {
            const zoneWrap = typeof imported[importName] === 'function' &&
            // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
            (overrides[importName]?.zoneWrap ?? importName[0] !== importName[0].toUpperCase());
            const exportName = overrides[importName]?.exportName ?? importName;
            return [importName, exportName, zoneWrap];
        }) as ToBeExported;
    }
}