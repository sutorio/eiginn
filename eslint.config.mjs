// @ts-expect-error 7016 missing declaration files
import eslint from "@eslint/js"; 
import globals from "globals";
import tseslint from "typescript-eslint";
// Configurations

// @ts-expect-error 7016 missing declaration files
import eslintConfigPrettier from "eslint-config-prettier";
// TODO: next major release of `eslint-plugin-react` will require *removing* the .js extension here; it will have a module alias defined in its package.json
// @ts-expect-error 7016 missing declaration files
import eslintConfigReactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
// Plugins
// @ts-expect-error 7016 missing declaration files
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
// @ts-expect-error 7016 missing declaration files
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

const COMMON_FILE_EXTENSIONS = "[cm]?[jt]sx?";

/**
 * # Why a single ESLint config at root?
 *
 * It's easier to manage. Tradeoff is that for each package added to the monorepo,
 * this needs to [possibly] be adjusted.
 *
 * Each block of rules in the config is merged with the previous, overriding
 * if there is a conflict.
 *
 * @see {@link https://eslint.org/docs/latest/} for eslint docs
 * @see {@link https://typescript-eslint.io/getting-started/} for typescript-eslint docs
 */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  eslintConfigReactJsxRuntime,
  {
    files: [`**/*.${COMMON_FILE_EXTENSIONS}`],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
  },
  {
    files: ["**/*.config.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // IMPORTANT: Prettier config *must be last* as it disables any rules that might conflict with Prettier formatting
  eslintConfigPrettier,
);
