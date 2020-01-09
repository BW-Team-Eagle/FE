import React from 'react';
import { Flex } from 'rebass';
import { LoginForm } from '../components/forms';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const LoginPage = props => {
  console.log('comp props', props);
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
      <LoginForm
        onSubmit={values => {
          axios
            .post('http://localhost:8000/api/login/', values)
            .then(res => {
              console.log(props);
              props.history.push('/game');
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />
    </Flex>
  );
};

export default LoginPage;
