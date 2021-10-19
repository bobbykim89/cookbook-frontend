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
      user {
        profile {
          introduction
          avatar {
            id
            url
            formats
          }
        }
      }
    }
  }
`;

const GET_USER_INFO = gql`
  query UserInfo {
    me {
      email
      username
      id
      user {
        profile {
          introduction
          id
          avatar {
            id
            url
            formats
          }
        }
        recipes {
          title
          ingredients
          direction
          user {
            username
            id
          }
          category {
            name
            id
          }
          cover {
            id
            url
            formats
          }
          created_at
        }
      }
    }
  }
`;

export { GET_USER, ME, GET_USER_INFO };
