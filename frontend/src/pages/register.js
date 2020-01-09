import React from 'react';
import { Flex } from 'rebass';
import { RegisterForm } from '../components/forms';
import axios from 'axios';

const RegisterPage = props => {
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
      <RegisterForm
        onSubmit={values => {
          axios
            .post('http://localhost:8000/api/registration', values)
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

export default RegisterPage;
