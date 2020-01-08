import React from 'react';
import { Label as RebassLabel, Input as RebassInput } from '@rebass/forms';

export const Label = ({ htmlFor, children }) => (
  <RebassLabel
    htmlFor={htmlFor}
    sx={{
      fontSize: 3
    }}
  >
    {children}
  </RebassLabel>
);

export const Input = ({ name, type }) => (
  <RebassInput
    name={name}
    type={type}
    sx={{
      width: '100%',
      fontSize: 2
    }}
  />
);
