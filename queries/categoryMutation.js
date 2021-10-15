import { gql } from '@apollo/client';

const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!) {
    createCategory(input: { data: { name: $name } }) {
      category {
        name
        id
      }
    }
  }
`;

export { CREATE_CATEGORY };
