import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,

  globalIgnores([
    ".next/**",
    "node_modules/**",
    "src/routes/**",
    "src/router.tsx",
    "src/routeTree.gen.ts",
    "src/server.ts",
    "src/start.ts",
    "vite.config.ts",
    "dist/**",
    ".output/**",
    ".vinxi/**",
    "next-env.d.ts",
  ]),
]);