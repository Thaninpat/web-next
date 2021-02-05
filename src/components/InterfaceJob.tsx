export module namespace {
  export interface Id {
    $oid: string
  }

  export interface User {
    $oid: string
  }

  export interface CreatedAt {
    $date: Date
  }

  export interface RootObject {
    _id: Id
    typeJob: string
    comment: string
    desiredDate: string
    user: User
    createdAt: CreatedAt
  }
}
