import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../theme/theme';
import { Box, Flex } from 'rebass';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* LAYOUT CONTAINER */}
      <Box
        sx={{
          fontFamily: 'body',
          lineHeight: 'body'
        }}
      >
        <Flex
          sx={{
            width: '100%',
            minHeight: '100vh',
            bg: 'background'
          }}
        >
          {children}
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
