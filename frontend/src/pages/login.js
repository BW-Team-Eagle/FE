import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { UserForm } from '../components/forms';
import { H1 } from '../components/headings';

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
      <UserForm title='Login' buttonText='Login' />
    </Flex>
  );
};

export default LoginPage;
