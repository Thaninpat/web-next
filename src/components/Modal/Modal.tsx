import React from 'react'

import {
  Box,
  Button,
  color,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'

interface JobModalProps {
  onOpen: () => void
}

export const JobModal: React.FC<JobModalProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <form>
          <ModalBody>
            <Stack spacing={4} mb={4}>
              <Input
                name='jobContent'
                type='text'
                placeholder='Input job'
                value=''
              />
              <Textarea
                name='comment'
                size='sm'
                placeholder='Comment...'
                value=''
              />
            </Stack>
            <Button type='submit'>Add</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
