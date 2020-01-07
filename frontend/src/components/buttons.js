import React from 'react';
import { Button, Box } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

const primaryButton = {
  display: 'flex',
  bg: 'primary',
  color: 'muted',
  ':hover': {
    color: 'white',
    cursor: 'pointer'
  }
};

export const TakeItemButton = ({ clicked }) => (
  <Button
    onClick={clicked}
    sx={{
      ...primaryButton,
      fontSize: 1,
      alignItems: 'center',
      py: 1,
      px: 2,
      ml: 3
    }}
  >
    <Box mr={1}>
      <FontAwesomeIcon icon={faHandPaper} />
    </Box>
    Take Item
  </Button>
);

export const MoveButton = ({ clicked, icon, direction }) => (
  <Button
    onClick={clicked}
    sx={{
      ...primaryButton,
      fontSize: 3,
      py: 2,
      px: 4,
      mr: 4
    }}
  >
    <Box mr={2}>
      <FontAwesomeIcon icon={icon} />
    </Box>
    {direction}
  </Button>
);
