import React from 'react';
import { Flex } from 'rebass';

const Sidebar = props => {
  return (
    <Flex
      as='aside'
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '28rem',
        minHeight: '100vh',
        bg: 'primary'
      }}
    ></Flex>
  );
};

export default Sidebar;
