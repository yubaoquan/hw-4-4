import * as React from 'react';
import { Avatar, Text, Flex } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';
import useSiteEdit from './site-edit';

const SiteBtn: React.FC = () => {
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

  const { render: SiteForm, showSiteForm } = useSiteEdit();

  const handleAdd = (form: any) => {
    console.info('handleAdd', form);
  };

  return (
    <>
      <Flex {...containerStyle} role="group" onClick={showSiteForm}>
        <Avatar icon={<IoMdAdd />} size="md" bg="rgba(25, 25, 25, 1)" color="#fff" mt="16px" />
        <Text {...textStyle}>Add shortcut</Text>
      </Flex>
      {/* 弹窗 */}
      <SiteForm isEdit={false} onSubmit={handleAdd} />
    </>
  );
};

export default SiteBtn;
