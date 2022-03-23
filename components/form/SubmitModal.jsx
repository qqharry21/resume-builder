/** @format */

import {
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Button } from '../motion';

const SubmitModal = ({ isOpen, onClose, type, isSubmitting, toggleSubmit }) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size='sm'
      motionPreset='slideInBottom'
      scrollBehavior='inside'>
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) ' />
      <ModalContent>
        <ModalHeader>{type === 'add' ? 'Add' : 'Edit'}&nbsp;Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Please double-check that the data fields are entered correctly</Text>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing={4}>
            <Button onClick={onClose}>Close</Button>
            <Button
              colorScheme='teal'
              type='submit'
              isLoading={isSubmitting}
              loadingText={type === 'add' ? 'Saving' : 'Updating'}
              onClick={toggleSubmit}
              mr={3}>
              Save
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SubmitModal;
