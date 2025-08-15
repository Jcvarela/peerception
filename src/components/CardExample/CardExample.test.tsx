import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { lightTheme } from '@/theme/theme';
import { CardExample } from './CardExample';

import '@testing-library/jest-dom';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </FluentProvider>
  );
}

describe('CardExample', () => {
  it('renders region with accessible name', () => {
    renderWithProviders(<CardExample />);
    expect(screen.getByRole('region', { name: /example card/i })).toBeInTheDocument();
  });

  it('renders heading with correct text', () => {
    renderWithProviders(<CardExample />);
    expect(screen.getByRole('heading', { level: 2, name: /card example/i })).toBeInTheDocument();
  });

  it('renders sample content paragraph', () => {
    renderWithProviders(<CardExample />);
    expect(screen.getByText(/sample content/i)).toBeInTheDocument();
  });

  it('region contains heading and paragraph', () => {
    renderWithProviders(<CardExample />);
    const region = screen.getByRole('region', { name: /example card/i });
    expect(region).toContainElement(screen.getByRole('heading', { level: 2 }));
    expect(region).toContainElement(screen.getByText(/sample content/i));
  });
});
