import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { lightTheme } from '@/theme/theme';
import { Swipecard } from './Swipecard';

import '@testing-library/jest-dom';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </FluentProvider>
  );
}

describe('Swipecard', () => {
  it('renders with accessible group', () => {
    renderWithProviders(<Swipecard text="Question" />);
    expect(screen.getByRole('group', { name: /question/i })).toBeInTheDocument();
  });
});
