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

export { GET_USER };
