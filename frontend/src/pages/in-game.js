import React from 'react';
import { Box, Flex } from 'rebass';
import { RoomTitle, RoomActionTitle } from '../components/headings';
import { RoomDescription, ItemName } from '../components/text';
import { TakeItemButton, MoveButton } from '../components/buttons';
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const RoomActionSection = ({ title, children }) => (
  <Box mb={4}>
    <RoomActionTitle>{title}</RoomActionTitle>
    {children}
  </Box>
);

const Item = ({ name }) => (
  <Flex alignItems='center' mb={3}>
    <Flex>
      <Box
        sx={{
          height: '2.8rem',
          width: '2.8rem',
          bg: 'muted',
          borderRadius: '50%',
          mr: 2
        }}
      ></Box>
      <ItemName>{name}</ItemName>
      <TakeItemButton />
    </Flex>
  </Flex>
);

const InGamePage = () => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        pb: 4,
        px: 5
      }}
    >
      <RoomTitle>Bluebird Cove</RoomTitle>

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
        occupy dreamcatcher meditation roof party. Bespoke before they sold out
        viral, tacos plaid hella whatever kale chips.
      </RoomDescription>

      <RoomActionSection title='Move Player:'>
        <Flex>
          <MoveButton icon={faArrowUp} direction='North' />
          <MoveButton icon={faArrowDown} direction='South' />
          <MoveButton icon={faArrowRight} direction='East' />
          <MoveButton icon={faArrowLeft} direction='West' />
        </Flex>
      </RoomActionSection>

      <RoomActionSection title='Available Items:'>
        <Item name='Sword' />
        <Item name='Sawed-off Shotgun' />
        <Item name='Rusty Lantern' />
      </RoomActionSection>
    </Flex>
  );
};

export default InGamePage;
