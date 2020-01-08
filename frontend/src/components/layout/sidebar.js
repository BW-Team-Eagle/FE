import React from 'react';
import { Flex, Box } from 'rebass';
import { SidebarItemText } from '../text';
import { SidebarSectionTitle } from '../headings';

const SidebarUser = ({ username }) => (
  <Flex alignItems='center'>
    <Box
      sx={{
        height: '4rem',
        width: '4rem',
        bg: 'muted',
        borderRadius: '50%',
        mr: 2
      }}
    />
    <SidebarItemText fontSize={5} color='white'>
      {username}
    </SidebarItemText>
  </Flex>
);

const SidebarSection = ({ title, children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      mt: 4
    }}
  >
    <SidebarSectionTitle>{title}</SidebarSectionTitle>
    {children}
  </Flex>
);

const SidebarItem = ({ text }) => (
  <Flex alignItems='center' mb={1}>
    <Box
      sx={{
        height: '2.4rem',
        width: '2.4rem',
        borderRadius: '50%',
        bg: 'muted',
        mr: 2
      }}
    />
    <SidebarItemText fontSize={4}>{text}</SidebarItemText>
  </Flex>
);

const Sidebar = props => {
  return (
    <Flex
      as='aside'
      sx={{
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '28rem',
        minHeight: '100vh',
        bg: 'primary',
        pt: 5,
        px: 4
      }}
    >
      <SidebarUser username='dvcolin' />

      <SidebarSection title='Current Players:'>
        <SidebarItem text='dvcolin' />
        <SidebarItem text='User 2' />
        <SidebarItem text='User 3' />
      </SidebarSection>
    </Flex>
  );
};

export default Sidebar;
