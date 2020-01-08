import React from 'react';
import { Box, Flex } from 'rebass';
import { H1, H3 } from '../components/headings';
import { RoomDescription } from '../components/text';
import { MoveButton } from '../components/buttons';
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/layout/sidebar';

const RoomActionSection = ({ title, children }) => (
  <Box mb={4}>
    <H3>{title}</H3>
    {children}
  </Box>
);

const InGamePage = () => {
  return (
    <Flex alignItems='center'>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          pb: 4,
          pl: 5,
          pr: '28rem'
        }}
      >
        <H1>Bluebird Cove</H1>

        <RoomDescription
          sx={{
            mt: 4,
            pr: 5,
            mb: 4
          }}
        >
          Lorem ipsum dolor amet stumptown hexagon selvage fanny pack sartorial
          vice, enamel pin beard pinterest authentic. Meggings tumeric
          vexillologist, tattooed vaporware literally messenger bag jean shorts
          occupy dreamcatcher meditation roof party. Bespoke before they sold
          out viral, tacos plaid hella whatever kale chips.
        </RoomDescription>

        <RoomActionSection title='Move Player:'>
          <Flex>
            <MoveButton icon={faArrowUp} direction='North' />
            <MoveButton icon={faArrowDown} direction='South' />
            <MoveButton icon={faArrowRight} direction='East' />
            <MoveButton icon={faArrowLeft} direction='West' />
          </Flex>
        </RoomActionSection>
      </Flex>
      <Sidebar />
    </Flex>
  );
};

export default InGamePage;
