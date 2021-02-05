import { Tbody, Tr, Td } from '@chakra-ui/react'
import React from 'react'

interface BudgetItemProps {
  result: {
    id: number
    label: string
    key: string
  }
}
;[]

export const BudgetItem: React.FC<BudgetItemProps> = ({
  result,
}: BudgetItemProps) => {
  return (
    <Tr>
      <Td>{result.id + 1}</Td>
      <Td>{result.label}</Td>
      <Td>{result.key}</Td>
    </Tr>
  )
}
