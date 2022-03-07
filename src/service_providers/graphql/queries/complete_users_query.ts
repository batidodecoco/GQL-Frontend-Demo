import { gql } from "@apollo/client";

export default gql`
query CompleteUsers {
  users {
    id
    firstName
    lastName
    email
    telephone
  }
}
`