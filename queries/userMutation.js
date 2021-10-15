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

const SIGNUP_USER = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    register(input: { username: $name, email: $email, password: $password }) {
      jwt
      user {
        username
        id
        email
      }
    }
  }
`;

export { LOGIN_USER, SIGNUP_USER };
