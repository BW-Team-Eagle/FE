import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../theme/theme';
import { Box, Flex } from 'rebass';
import Sidebar from './sidebar';

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      {/* LAYOUT CONTAINER */}
      <Box
        sx={{
          fontFamily: 'body',
          lineHeight: 'body'
        }}
      >
        {/* MAIN CONTAINER */}
        <Flex
          as='main'
          sx={{
            width: '100%',
            pr: '28rem',
            minHeight: '100vh',
            bg: 'background'
          }}
        ></Flex>

        {/* SIDEBAR */}
        <Sidebar />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
