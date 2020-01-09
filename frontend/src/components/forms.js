import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { H1 } from './headings';
import { Label, Input } from '@rebass/forms';
import { Formik, Form, Field } from 'formik';

const FormField = ({ name, placeholder }) => (
  <Field
    as={Input}
    sx={{
      width: '60%',
      my: 3,
      fontSize: 2
    }}
    placeholder={placeholder}
    name={name}
  />
);

export const UserForm = props => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={values => {
      console.log(values);
      props.onSubmit(values);
    }}
  >
    <Flex
      as={Form}
      flexDirection='column'
      width='60%'
      mx='auto'
      alignItems='center'
      pb={5}
    >
      <H1>{props.title}</H1>
      <FormField name='username' placeholder='Username' />
      <FormField name='password' placeholder='Password' />
      <Button
        type='submit'
        fontSize={3}
        color='muted'
        sx={{
          ':hover': {
            cursor: 'pointer',
            color: 'white'
          }
        }}
      >
        Submit
      </Button>
    </Flex>
  </Formik>
);
