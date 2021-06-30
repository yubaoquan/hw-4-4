import * as React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SiteEditProps {
  isEdit?: boolean,
  title?: string,
  url?: string,
  onSubmit: (form: any) => void
}

const { useState } = React;

const useEditSite = () => {
  const inputStyle = {
    h: '27px',
    fontSize: '13px',
    bgColor: 'rgb( 241, 243, 244)',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: '4px',
    p: '6px 8px',
    borderBottom: '2px solid transparent',
    _hover: {
      borderColor: 'transparent',
    },
    _focus: {
      outline: 0,
      borderBottom: '2px solid rgb( 51, 103, 214)',
    },
  };

  const confirmBtnStyle = {
    p: '8px 16px',
    fontSize: '13px',
    fontWeight: 'normal',
    bgColor: '#1a73e8',
    _disabled: {
      color: 'rgb(128, 134, 139)',
      bgColor: 'rgb(241, 243, 244)',
    },

    _hover: {
      _disabled: {
        bgColor: 'rgb(241, 243, 244)',
        cursor: 'auto',
      },
    },
  };

  const [expand, setExpand] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const render: React.FC<SiteEditProps> = ({
    isEdit, title = '', url = '', onSubmit,
  }: SiteEditProps) => {
    const formik = useFormik({
      initialValues: { title, url },
      validationSchema: Yup.object({
        url: Yup.string()
          .trim()
          .required('请输入网站地址'),
      }),
      onSubmit(values) {
        onSubmit(values);
      },
    });

    const handleClose = () => {
      onClose();
      formik.resetForm();
    };

    const handleOverlayClick = () => {
      console.info('overlay click');
    };

    // transform="scale(1.2, 1.2)"
    return (
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        blockScrollOnMount={false}
        closeOnOverlayClick={false}
        onOverlayClick={handleOverlayClick}
        isCentered
      >
        <ModalOverlay />
        <ModalContent color="tomato" transform="scale(1.5, 1.5)!important">
          <ModalHeader
            fontSize="15px"
            fontWeight="normal"
            color="rgb(32, 33, 36)"
            p="20px 20px 16px"
          >
            {isEdit ? 'Edit shortcut' : 'Add shortcut'}
          </ModalHeader>
          <ModalBody p="0 20px">
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="title" mb="20px">
                <FormLabel fontSize="10px" color="rgb(95, 99, 104)" mb="8px">Name</FormLabel>
                <Input {...formik.getFieldProps('title')} {...inputStyle} />
              </FormControl>
              <FormControl id="url" mb="30px">
                <FormLabel fontSize="10px" color="rgb(95, 99, 104)" mb="8px">URL</FormLabel>
                <Input {...formik.getFieldProps('url')} {...inputStyle} />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter p="24px 16px 16px">
            <Button
              size="sm"
              mr={3}
              onClick={handleClose}
              variant="outline"
              p="8px 16px"
              fontSize="13px"
              fontWeight="500"
              color="rgb(26, 115, 232)"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              colorScheme="blue"
              isDisabled={!formik.values.url}
              {...confirmBtnStyle}
              onClick={formik.handleSubmit as any}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return {
    render,
    showSiteForm: onOpen,
  };
};

export default useEditSite;
