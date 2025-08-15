import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { lightTheme } from '@/theme/theme';
import ComponentPlayground from '@/app/component-playground/ComponentPlayground';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </FluentProvider>,
  );
}

describe('ComponentPlayground', () => {
  const componentNames = ['CardExample', 'Foo'];

  it('renders list of components', () => {
    renderWithProviders(<ComponentPlayground componentNames={componentNames} />);
    expect(screen.getByText('CardExample')).toBeInTheDocument();
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });

  it('filters components by search input', async () => {
    renderWithProviders(<ComponentPlayground componentNames={componentNames} />);
    await userEvent.type(screen.getByPlaceholderText('Search components'), 'card');
    expect(screen.getByText('CardExample')).toBeInTheDocument();
    expect(screen.queryByText('Foo')).toBeNull();
  });

  it('links to component preview page', () => {
    renderWithProviders(<ComponentPlayground componentNames={componentNames} />);
    expect(screen.getByText('CardExample').closest('a')).toHaveAttribute('href', '/component-playground/CardExample');
  });
});
