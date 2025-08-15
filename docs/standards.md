# Development Standards

- Use TypeScript strict mode.
- Use absolute imports with "@/..." alias from tsconfig paths.
- Each component lives in `src/components/<Feature>` with:
  - `<Feature>.tsx` (component)
  - `<Feature>.styles.ts` (styling)
  - `<Feature>.test.tsx` (unit test with React Testing Library)
- Use MUI Grid v2 (`import Grid from "@mui/material/Grid2/Grid2"`) and Fluent UI v9 for UI.
- Keep all styling in `.styles.ts` files; do not add `.css` files or inline styles except when dynamic.
- Follow Conventional Commit style for commits and PR titles.
- All code must pass: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.
- Accessibility: All interactive components must be keyboard navigable and have proper aria labels.
- No secrets in repo; provide `.env.example` for safe defaults.
