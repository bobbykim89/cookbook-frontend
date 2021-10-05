import { gql } from '@apollo/client';

const GET_ALL_RECIPES = gql`
  query GetAllRecipes {
    recipes {
      title
      ingredients
      direction
      id
      created_at
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
        name
        url
        formats
      }
      category {
        name
        id
      }
    }
  }
`;

const GET_NEWEST_RECIPES = gql`
  query GetNewestRecipes {
    recipes(limit: 4, sort: "created_at:desc") {
      title
      ingredients
      direction
      id
      created_at
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
        name
        url
        formats
      }
      category {
        name
        id
      }
    }
  }
`;

export { GET_ALL_RECIPES, GET_NEWEST_RECIPES };
