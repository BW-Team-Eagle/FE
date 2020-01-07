import React from 'react';
import { Text } from 'rebass';

//SIDEBAR
export const SidebarItemText = props => (
  <Text
    sx={{
      color: 'white',
      fontFamily: 'heading',
      letterSpacing: '0.04rem'
    }}
    {...props}
  >
    {props.children}
  </Text>
);

// MAIN SECTION
export const RoomDescription = ({ sx, children }) => (
  <Text
    as='p'
    sx={{
      fontSize: 3,
      ...sx
    }}
  >
    {children}
  </Text>
);

export const ItemName = ({ children }) => (
  <Text
    sx={{
      fontSize: 3,
      fontWeight: 600
    }}
  >
    {children}
  </Text>
);
