import React from 'react';
import { Flex, Button } from 'rebass';
import { UserForm } from '../components/forms';
import { H1 } from '../components/headings';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

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
      <UserForm
        title='Login'
        buttonText='Login'
        onSubmit={values => {
          axios
            .post(
              'http://team-eagle-new-name-who-dis.herokuapp.com/api/login',
              values
            )
            .then(res => {
              console.log(values);
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

export default LoginPage;
