import React from 'react';
import { Button, Box } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

const primaryButton = {
  display: 'flex',
  bg: 'primary',
  color: '#ccc',
  ':hover': {
    color: 'white',
    cursor: 'pointer'
  }
};

export const TakeItemButton = () => (
  <Button
    sx={{
      ...primaryButton,
      fontSize: 2,
      py: 1,
      px: 2,
      ml: 3
    }}
  >
    <Box mr={2}>
      <FontAwesomeIcon icon={faHandPaper} />
    </Box>
    Take
  </Button>
);

export const MoveButton = ({ icon, direction }) => (
  <Button
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
