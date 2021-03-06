import type { FindMemberById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Member from 'src/components/Member/Member'

export const QUERY = gql`
  query FindMemberById($id: String!) {
    member: member(id: $id) {
      id
      kd_nr
      first_name
      last_name
      birthday
      gender
      street
      zipcode
      city
      phone
      mobil
      email
      courseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Member not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ member }: CellSuccessProps<FindMemberById>) => {
  return <Member member={member} />
}
