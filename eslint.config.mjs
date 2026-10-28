// import { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// import { FlatCompat } from "@eslint/eslintrc";
// const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });
// const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript")];
// export default eslintConfig;

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
