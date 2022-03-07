import { gql } from "@apollo/client";

export default gql`
mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $telephone: String!) {
  createUser(firstName: $firstName, lastName: $lastName, email: $email, telephone: $telephone) {
    success
    message
    user {
      id
      firstName
      lastName
      email
      telephone
    }
  }
}
`