import React from 'react'

export interface Id {
  $oid: string
}

export interface User {
  $oid: string
}

export interface CreatedAt {
  $date: Date
}

export interface jobProps {
  _id: Id
  typeJob: string
  comment: string
  desiredDate: string
  user: User
  createdAt: CreatedAt
  __v: number
}

export const job: React.FC<jobProps> = ({}) => {
  return <div></div>
}
