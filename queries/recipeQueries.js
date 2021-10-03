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
      }
      cover {
        name
        url
        formats
      }
    }
  }
`;

const GET_NEWEST_RECIPES = gql`
  query GetNewestRecipes {
    recipes {
      title
      ingredients
      direction
      id
      created_at
      user {
        username
        id
      }
      cover {
        name
        url
        formats
      }
    }
  }
`;

export { GET_ALL_RECIPES, GET_NEWEST_RECIPES };
