import { gql } from 'apollo-boost';

export const getMoviesQuery = gql`
    {
        movies{
            title,
            rating,
            smImageUrl,
            reviews{
                dateCreated
            }
        }
    }
`;

export const addUserQuery = gql`
    mutation($email:String!, $userName:String!, $password:String!){
        signUp(email: $email, userName: $userName, password: $password){
            userName
        }
    }
`;

export const checkUserNameAvailability = gql`
    query($userName: String!){
        user( userName: $userName ){
        userName
    }
}
`;

export const loginQuery = gql`
    {
        login(userName: $userName, password: $password){
            userName
        }
    }
`;