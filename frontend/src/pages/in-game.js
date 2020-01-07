import React from 'react';
import { Box, Flex } from 'rebass';
import { RoomTitle, RoomActionTitle } from '../components/headings';
import { RoomDescription, ItemName } from '../components/text';

const RoomActionSection = ({ title, children }) => (
  <Box mt={4}>
    <RoomActionTitle>{title}</RoomActionTitle>
    {children}
  </Box>
);

const Item = ({ name }) => (
  <Flex alignItems='center' mb={3}>
    <Box
      sx={{
        height: '2.8rem',
        width: '2.8rem',
        bg: '#ccc',
        borderRadius: '50%',
        mr: 2
      }}
    ></Box>
    <ItemName>{name}</ItemName>
  </Flex>
);

const InGamePage = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 5
      }}
    >
      <RoomTitle>Bluebird Cove</RoomTitle>

      <RoomDescription
        sx={{
          mt: 4,
          pr: 6
        }}
      >
        Lorem ipsum dolor amet stumptown hexagon selvage fanny pack sartorial
        vice, enamel pin beard pinterest authentic. Meggings tumeric
        vexillologist, tattooed vaporware literally messenger bag jean shorts
        occupy dreamcatcher meditation roof party. Bespoke before they sold out
        viral, tacos plaid hella whatever kale chips.
      </RoomDescription>

      <RoomActionSection title='Available Items:'>
        <Item name='Sword' />
        <Item name='Sawed-off Shotgun' />
        <Item name='Rusty Lantern' />
      </RoomActionSection>
      <RoomActionSection title='Move Player:' />
    </Box>
  );
};

export default InGamePage;
