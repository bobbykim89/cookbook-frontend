import { gql } from '@apollo/client';

const GET_USER = gql`
  query LoginUser($id: ID!) {
    user(id: $id) {
      username
      id
      profile {
        avatar {
          formats
        }
        introduction
        location
      }
    }
  }
`;

const ME = gql`
  query Me {
    me {
      email
      username
      id
    }
  }
`;

export { GET_USER, ME };
