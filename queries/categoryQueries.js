import { gql } from '@apollo/client';

const GET_CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
      recipes(sort: "created_at:desc") {
        title
        id
        direction
        user {
          username
          id
          profile {
            avatar {
              formats
            }
          }
        }
        cover {
          formats
        }
        category {
          name
          id
        }
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

export { GET_CATEGORY, GET_CATEGORIES };
