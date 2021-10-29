import { gql } from '@apollo/client';

const GET_PROFILE = gql`
  query ($id: ID!) {
    user(id: $id) {
      profile {
        id
        created_at
        introduction
        avatar {
          url
          formats
        }
      }
    }
  }
`;

export { GET_PROFILE };
