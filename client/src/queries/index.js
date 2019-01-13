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

export const addMovieQuery = gql`
    mutation($title: String!, $bgImageUrl: String!, $smImageUrl: String!, $description: String!, $releaseDate: String!, $cast: List!){
        addMovie(title: $title, bgImageUrl: $bgImageUrl, smImageUrl: $smImageUrl, description: $description, releaseDate: $releaseDate, cast: $cast){
            title,
            cast,
            reviews
        }

    }
`;