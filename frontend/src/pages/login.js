import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { Label, Input } from '../components/forms';
import { H1 } from '../components/headings';

const LoginForm = props => (
  <Flex as='form' flexDirection='column' mx='auto' width={'35%'} p={4} pb={6}>
    <H1
      sx={{
        mx: 'auto'
      }}
    >
      Login / Register
    </H1>
    <Box my={2}>
      <Label htmlFor='username'>Username</Label>
      <Input name='username' type='text' />
    </Box>
    <Box my={2}>
      <Label htmlFor='password'>Password</Label>
      <Input name='username' type='password' />
    </Box>
    <Button type='submit' fontSize={2} mt={4}>
      Login
    </Button>
    <Button fontSize={2} mt={4}>
      Register
    </Button>
  </Flex>
);

const LoginPage = props => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        pb: 4,
        px: 5,
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;
