import * as React from 'react';
import { Avatar, Text, Flex } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';

interface Props {
  onClick: () => void
}

const containerStyle: any = {
  w: '112px',
  h: '112px',
  direction: 'column',
  align: 'center',
  justify: 'flex-start',
  borderRadius: '4px',
  cursor: 'pointer',
  _hover: { bgColor: 'rgba(255, 255, 255, .1)' },
};

const textStyle: any = {
  mt: '6px',
  p: '2px 8px',
  whiteSpace: 'nowrap',
  color: 'rgba(144, 210, 224, 1)',
  fontSize: '13px',
  width: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

const SiteBtn: React.FC<Props> = ({ onClick }: Props) => (
  <Flex {...containerStyle} onClick={onClick}>
    <Avatar icon={<IoMdAdd />} w="48px" h="48px" bg="rgba(25, 25, 25, 1)" color="#fff" mt="16px" />
    <Text {...textStyle}>Add shortcut</Text>
  </Flex>
);

export default SiteBtn;
