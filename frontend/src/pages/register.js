import React from 'react';
import { Flex } from 'rebass';
import { UserForm } from '../components/forms';
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
      <UserForm
        title='Register'
        buttonText='Register'
        onSubmit={values => {
          axios
            .post(
              'http://team-eagle-new-name-who-dis.herokuapp.com/api/registration',
              values
            )
            .then(res => {
              console.log(res);
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
