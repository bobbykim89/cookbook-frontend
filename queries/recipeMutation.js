import { gql } from '@apollo/client';

const CREATE_RECIPE = gql`
    mutation CreateRecipe($title: String!, $ingredients: String!, direction: String!, $user: ID!, $category: ID!, $cover: ID!) {
        createRecipe (input: {data: {
            title: $title,
            ingredients: $ingredients,
            direction: $direction,
            user: $user,
            category: $category,
            cover: $cover
        }}) {
            recipe {
                title
                ingredients
                direction
                user {
                    username
                    profile {
                        avatar {
                            formats
                        }
                    }
                }
                category {
                    name
                }
                created_at
                cover {
                    name
                    id
                    formats
                }
            }
        }
    }
`;

export { CREATE_RECIPE };
