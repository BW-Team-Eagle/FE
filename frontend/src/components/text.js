import React from 'react';
import { Text } from 'rebass';

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
