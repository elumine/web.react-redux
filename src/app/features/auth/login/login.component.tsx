import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { login } from './login.action';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';


type LoginFormData = {
  username: string;
  password: string;
  remember: boolean;
}

export function Login() {
  const authState = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(login({ username: data.username, password: data.password }));
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (authState.token) {
      navigate('/dashboard');
    }
  }, [navigate, authState]);

  return (
    <div>
        { authState.status == 'pending' && <CircularProgress /> }
        { authState.status == 'failed' && 
          <div>
            Login failed. { authState.errorMessage }
          </div>
        }
        { authState.status == 'succeeded' && 
          <div>
            Login success. <Link to={'/dashboard'}>Dashboard</Link>
          </div>
        }
        { authState.status == 'idle' && <div>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                id="login"
                type="text"
                name="login"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                {...register('username', { required: true, maxLength: 20 })}
                onChange={(e) => e.target.value} />
            </FormControl>
            <div>{errors.username?.message}</div>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                {...register('password', { required: true, pattern: /^[A-Za-z]+$/i })}
                onChange={(e) => e.target.value} />
            </FormControl>
            <div>{errors.password?.message}</div>
            <FormControlLabel
              control={<Checkbox color="primary" {...register('remember')} />}
              label="Remember me"/>
            <Button
              type="submit"
              fullWidth
              variant="contained">
              Sign in
            </Button>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}>
              <img width='15px' height='15px' style={{marginRight: '10px'}}
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" /> 
              Sign in with Google
            </Button>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link to={'/auth/registration'}>Register</Link>
          </Box>
        </div> }
    </div>
  )
}