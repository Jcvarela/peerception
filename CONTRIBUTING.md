# Contributing

Thank you for contributing! Please review our [Development Standards](./docs/standards.md) before submitting changes.

Key guidelines:

- Use TypeScript strict mode and `@/...` absolute imports.
- Place each component in `src/components/<Feature>` with component, styles, and tests.
- Use MUI Grid v2 and Fluent UI v9 for UI with styling kept in `.styles.ts` files.
- Follow Conventional Commits for commit messages and PR titles.
- Ensure code passes `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
- Verify accessibility and avoid committing secrets; provide safe defaults in `.env.example`.
