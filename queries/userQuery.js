import { gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        username
        id
      }
    }
  }
`;

export { LOGIN_USER };
