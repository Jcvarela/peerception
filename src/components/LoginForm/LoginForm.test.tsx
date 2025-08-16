import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { lightTheme } from '@/theme/theme';
import { LoginForm } from './LoginForm';

import '@testing-library/jest-dom';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </FluentProvider>
  );
}

describe('LoginForm', () => {
  it('renders inputs and submit button', () => {
    renderWithProviders(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('allows user input', async () => {
    const user = userEvent.setup();
    renderWithProviders(<LoginForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    await user.type(emailInput, 'user@example.com');
    await user.type(passwordInput, 'password123');
    expect(emailInput).toHaveValue('user@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('shows validation errors for invalid input', async () => {
    const user = userEvent.setup();
    renderWithProviders(<LoginForm />);
    await user.click(screen.getByRole('button', { name: /log in/i }));
    expect(await screen.findByText(/enter a valid email/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  it('logs form data on valid submit', async () => {
    const user = userEvent.setup();
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    renderWithProviders(<LoginForm />);
    await user.type(screen.getByLabelText(/email/i), 'user@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /log in/i }));
    expect(logSpy).toHaveBeenCalledWith({ email: 'user@example.com', password: 'password123' });
    logSpy.mockRestore();
  });
});

