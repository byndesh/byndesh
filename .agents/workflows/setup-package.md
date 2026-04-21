---
description: Scaffold a new package in the Beyndesh monorepo
---

When the user types `/setup-package <package-name>`, do the following:

1. Create the directory structure at `packages/<package-name>/`
2. Create `package.json` with:
   - name: `@beyndesh/<package-name>`
   - version: "0.0.0"
   - private: true
   - main: "./src/index.ts"
   - types: "./src/index.ts"
   - scripts for build, lint, typecheck
3. Create `tsconfig.json` extending `@beyndesh/config/typescript/base.json`
4. Create `src/index.ts` with a placeholder export
5. Report what was created and any next steps
