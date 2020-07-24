import {gql} from 'apollo-boost';

const getCategoriesQuery = gql`
    {
        categories {
            name
            id
        }
    }
`;

const getSubcategoriesQuery = gql`
    {
        subcategories {
            name
            id
        }
    }
`;

const getReviewsQuery = gql`
    {
        reviews {
            content
            id
        }
    }
`;

const addReviewMutation = gql`
    mutation AddReview($name: String!, $subcategoryId: ID!){
        addReview(name: $name, subcategoryId: $subcategoryId){
            name
            id
        }
    }
`;


export {getCategoriesQuery, getSubcategoriesQuery, getReviewsQuery, addReviewMutation};
