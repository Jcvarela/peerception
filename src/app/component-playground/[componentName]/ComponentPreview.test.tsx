import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { lightTheme } from '@/theme/theme';
import ComponentPreview from '@/app/component-playground/[componentName]/ComponentPreview';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </FluentProvider>,
  );
}

describe('ComponentPreview', () => {
  it('renders the provided component', async () => {
    renderWithProviders(<ComponentPreview name="CardExample" />);
    expect(await screen.findByRole('region', { name: /cardexample preview/i })).toBeInTheDocument();
    expect(await screen.findByText('Card Example')).toBeInTheDocument();
  });
});
