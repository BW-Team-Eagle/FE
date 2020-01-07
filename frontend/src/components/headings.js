import React from 'react';
import { Heading } from 'rebass';

export const RoomTitle = ({ children }) => (
  <Heading
    as='h1'
    sx={{
      fontSize: 6,
      color: 'primary'
    }}
  >
    {children}
  </Heading>
);

export const RoomActionTitle = ({ children }) => (
  <Heading
    as='h3'
    sx={{
      fontSize: 5,
      color: 'primary',
      mb: 3
    }}
  >
    {children}
  </Heading>
);