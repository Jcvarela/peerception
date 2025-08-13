import js from '@eslint/js';
import eslintPluginNext from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  eslintPluginNext.configs['core-web-vitals'],
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', '.next'],
  }
);
