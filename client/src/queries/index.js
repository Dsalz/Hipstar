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

export const addReviewQuery = gql`
    mutation($message: String!, $rating: Number!, $whereSeen: String!, $whenSeen: String!, $movieId: String!, $userId: String!){
        addMovie(message: $message, rating: $rating, whereSeen: $whereSeen, whenSeen: $whenSeen, movieId: $movieId, userId: $userId){
            message,
            rating,
            movie{
                title
            },
            whereSeen,
            whenSeen
        }

    }
`;