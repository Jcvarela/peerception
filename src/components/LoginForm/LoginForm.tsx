"use client";

import { useState, FormEvent } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { Button } from '@fluentui/react-components';
import { loginFormStyles } from './LoginForm.styles';

export function LoginForm() {
  const theme = useTheme();
  const styles = loginFormStyles(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let valid = true;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log({ email, password });
    }
  };

  return (
    <Grid
      container
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={styles.root}
      spacing={2}
    >
      <Grid xs={12}>
        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          placeholder="••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
      </Grid>
      <Grid xs={12} sx={styles.buttonContainer}>
        <Button appearance="primary" type="submit">
          Log in
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginForm;

