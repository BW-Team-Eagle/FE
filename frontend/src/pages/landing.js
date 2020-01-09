import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Link } from 'react-router-dom';
import { H1 } from '../components/headings';

const LandingButton = ({ to, text }) => (
  <Button
    as={Link}
    to={to}
    sx={{
      display: 'block',
      fontSize: 4,
      bg: 'primary',
      color: 'muted',
      mt: 4,
      ':hover': {
        color: 'white'
      }
    }}
  >
    {text}
  </Button>
);

const LandingPage = props => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        pb: 6,
        px: 5,
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <Box mx='auto'>
        <H1>Adventure Game</H1>
        <LandingButton to='/login' text='Login' />
        <LandingButton to='/register' text='Register' />
      </Box>
    </Flex>
  );
};

export default LandingPage;
