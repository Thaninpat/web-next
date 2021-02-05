import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  Center,
  Flex,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { BudgetItem } from '../components/BudgetItem'
import { Search } from '../components/Search'
import { results } from './api/data'

// ไม่ต้องมี interface ในหน้านี้ก้ได้ เพราะหน้านี้เป็น root
interface budgetOverviewProps {}

const budgetOverview: React.FC<budgetOverviewProps> = () => {
  const [searchText, setSearchText] = useState('')

  const result = results
    .filter((result) => {
      return result.label.includes(searchText)
    })
    .map((item, index) => {
      return <BudgetItem key={index} result={item} />
    })

  return (
    <Flex
      align={'center'}
      justify={'space-between'}
      p={20}
      flexDirection={'column'}
    >
      <Heading textAlign='center'>Budget</Heading>
      <Search value={searchText} onValueChange={setSearchText} />
      <Center marginTop='30px'>
        <Box maxW={1200} borderWidth='1px' borderRadius='lg' p={10}>
          <Table variant='simple' size='md'>
            <TableCaption>Table Caption</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Label</Th>
                <Th>Key</Th>
              </Tr>
            </Thead>
            <Tbody>{result}</Tbody>
          </Table>
        </Box>
      </Center>
    </Flex>
  )
}

export default budgetOverview
