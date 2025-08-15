# Styling Standards

## General
- All component styles live in `.styles.ts` files; no standalone `.css` files.
- Use tokens from the application theme and spacing via `theme.spacing`.
- Prefer semantic tokens for colors and typography.

## Layout
- Use **MUI Grid v2** (`import Grid from "@mui/material/Grid2"`).
- Use `size` and `offset` props for responsive layout.

## Theming
- Wrap components with **Fluent UI v9** `FluentProvider` and MUI `ThemeProvider`.
- Consume design tokens from `lightTheme`/`darkTheme`.
- Respect prefers-color-scheme for dark mode.

## Accessibility & Motion
- Provide `aria` attributes and keyboard navigation.
- Reduce motion when `prefers-reduced-motion` is enabled.
- Ensure themes support dark mode.

## Do / Don't
- **Do** keep styling in `.styles.ts` and compose with the theme.
- **Do** use `theme.spacing` for margins and padding.
- **Don't** use inline styles (except minimal resets) or external CSS files.

## Example

```ts
// CardExample.styles.ts
import { Theme } from '@mui/material/styles';

export const cardExampleStyles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
});
```

```tsx
// CardExample.tsx
import Grid from '@mui/material/Grid2';
import { cardExampleStyles } from './CardExample.styles';

export function CardExample() {
  const styles = cardExampleStyles(useTheme());
  return (
    <Grid sx={styles.root} container>
      Content
    </Grid>
  );
}
```
