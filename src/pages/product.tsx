import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React, { useState } from 'react'

// import { useUserQuery } from '../generated/graphql'

// ?: --> null
interface jobProps {
  id?: string
  jobContent?: string
  comment?: string
}
;[]
const setStateStart = {
  id: '',
  jobContent: '',
  comment: '',
}

const product: React.FC<jobProps> = ({}) => {
  // // const { isOpen, onOpen, onClose } = useDisclosure()
  // // State Job Value Change
  // const [job, setJob] = useState<jobProps>(setStateStart)
  // //  state Edit job Value Change
  // const [editJob, setEditJob] = useState<jobProps | null>(null)
  // // state show allJob
  // const [allJob, setAllJob] = useState<jobProps[]>([])

  // // on off modal
  // const { isOpen, onOpen, onClose } = useDisclosure()

  // // Function form input
  // function onJobValueChange(event: any) {
  //   const { name, value } = event.target
  //   setJob((prevJob) => {
  //     return {
  //       ...prevJob,
  //       [name]: value,
  //     }
  //   })
  // }

  // // Function form edit
  // function onJobEditValueChange(event: any) {
  //   const { name, value } = event.target
  //   setEditJob((prevJob) => {
  //     return {
  //       ...prevJob,
  //       [name]: value,
  //     }
  //   })
  // }

  // // Function Job submit
  // function onJobSubmit(event: any) {
  //   event.preventDefault()

  //   setAllJob((prevAllJob) => {
  //     const newJob = { ...job }
  //     newJob.id = Date.now().toString()
  //     return [newJob, ...prevAllJob]
  //   })
  //   setJob(setStateStart)
  // }

  // // Function Edit submit

  // function onJobEditSubmit(event: any) {
  //   event.preventDefault()

  //   setAllJob((prevAllJob) => {
  //     return prevAllJob.map((theJob) => {
  //       if (theJob.id !== editJob?.id) {
  //         return theJob
  //       } else {
  //         return editJob
  //       }
  //     })
  //   })
  //   setEditJob(null)
  // }

  // function onJobDelete(jobId: any) {
  //   setAllJob((prevAllJob) => {
  //     return prevAllJob.filter((theJob) => theJob.id !== jobId)
  //   })
  // }

  // function handleEditModal(theJob: any) {
  //   setEditJob(theJob)
  //   onOpen()
  // }

  // let editJobElement = null
  // if (!!editJob) {
  //   editJobElement = (
  //     <Modal isOpen={isOpen} onClose={onClose}>
  //       <ModalOverlay />
  //       <ModalContent>
  //         <ModalHeader>Edit</ModalHeader>
  //         <ModalCloseButton />
  //         <form onSubmit={onJobEditSubmit}>
  //           <ModalBody pb={6}>
  //             <FormControl>
  //               <Input
  //                 name='jobContent'
  //                 type='text'
  //                 placeholder='Input job'
  //                 value={editJob.jobContent}
  //                 onChange={onJobEditValueChange}
  //               />
  //             </FormControl>

  //             <FormControl mt={4}>
  //               <Textarea
  //                 name='comment'
  //                 size='sm'
  //                 placeholder='Comment...'
  //                 value={editJob.comment}
  //                 onChange={onJobEditValueChange}
  //               />
  //             </FormControl>
  //           </ModalBody>

  //           <ModalFooter>
  //             <Button m={1} type='submit'>
  //               Submit
  //             </Button>
  //             <Button m={1} onClick={onClose}>
  //               Cancel
  //             </Button>
  //           </ModalFooter>
  //         </form>
  //       </ModalContent>
  //     </Modal>
  //   )
  // }

  // const jobElements = allJob.map((theJob) => {
  //   return (
  //     <Box key={theJob.id} mt={4} p={3} bg='#f1f1f1' borderRadius={5}>
  //       <Text px={4} fontSize={'3xl'}>
  //         {theJob.jobContent}
  //       </Text>
  //       <Text px={4} fontSize={'md'}>
  //         {theJob.comment}
  //       </Text>

  //       <Button
  //         onClick={() => {
  //           handleEditModal(theJob)
  //         }}
  //         bg='#f1f1f1'
  //         _hover={{
  //           bgColor: '#f1f1f1',
  //           color: '#a4b85d',
  //         }}
  //       >
  //         Edit
  //       </Button>

  //       <span> | </span>

  //       <Button
  //         onClick={() => {
  //           onJobDelete(theJob.id)
  //         }}
  //         bg='#f1f1f1'
  //         _hover={{
  //           bgColor: '#f1f1f1',
  //           color: '#c25f5f',
  //         }}
  //       >
  //         Delete
  //       </Button>
  //     </Box>
  //   )
  // })

  return (
    <Flex align={'center'} justify={'center'} p={20} flexDirection={'column'}>
      <Heading>เพิ่ม ผลิตภัณฑ์</Heading>
      {/* <Container margin={10}>
        <form onSubmit={onJobSubmit}>
          <Stack spacing={4} mb={4}>
            <Input
              name='jobContent'
              type='text'
              placeholder='Input'
              value={job.jobContent}
              onChange={onJobValueChange}
            />
            <Textarea
              name='comment'
              size='sm'
              placeholder='Comment...'
              value={job.comment}
              onChange={onJobValueChange}
            />
          </Stack>
          <Button type='submit'>Add</Button>
        </form>
        {jobElements}
        {editJobElement}
      </Container>  */}
    </Flex>
  )
}

export default product
