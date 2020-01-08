import React from 'react';
import { Flex, Heading } from 'rebass';

const LoginForm = props => (
  <Flex flexDirection='column' mx='auto'>
    <Heading
      as='h3'
      sx={{
        fontSize: 6
      }}
    >
      Login
    </Heading>
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
