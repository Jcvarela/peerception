import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { lightTheme } from '@/theme/theme';
import { CardExample } from './CardExample';

import '@testing-library/jest-dom';

describe('CardExample', () => {
  it('renders region with accessible name', () => {
    render(
      <FluentProvider theme={webLightTheme}>
        <ThemeProvider theme={lightTheme}>
          <CardExample />
        </ThemeProvider>
      </FluentProvider>
    );
    expect(screen.getByRole('region', { name: /example card/i })).toBeInTheDocument();
  });
});
