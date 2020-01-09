import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { H1 } from './headings';
import { Label, Input } from '@rebass/forms';

const Field = ({ name, type, labelText }) => (
  <Box my={2}>
    <Label
      htmlFor={name}
      sx={{
        fontSize: 3
      }}
    >
      {labelText}
    </Label>

    <Input
      name={name}
      type={type}
      sx={{
        width: '100%',
        fontSize: 2
      }}
    />
  </Box>
);

export const UserForm = ({ title, buttonText }) => (
  <Flex as='form' flexDirection='column' mx='auto' width={'40%'} p={4} pb={6}>
    <H1
      sx={{
        mx: 'auto'
      }}
    >
      {title}
    </H1>
    <Field name='username' type='text' labelText='Username' />
    <Field name='password' type='password' labelText='Password' />
    <Button width={2 / 3} fontSize={2} mx='auto' mt={4} type='submit'>
      {buttonText}
    </Button>
  </Flex>
);
