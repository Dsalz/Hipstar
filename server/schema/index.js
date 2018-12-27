import graphQL from 'graphql';

const {
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} = graphQL;

const movies = [
    {id: 1, img: 'https://placehold.it/100', title: 'Aquaman', rating: 8.2},
    {id: 2, img: 'https://placehold.it/100', title: 'Bquaman', rating: 5.0},
    {id: 3, img: 'https://placehold.it/100', title: 'Cquaman', rating: 7.2},
    {id: 4, img: 'https://placehold.it/100', title: 'Dquaman', rating: 4.2},
    {id: 5, img: 'https://placehold.it/100', title: 'Aquaman', rating: 7.0},
    {id: 6, img: 'https://placehold.it/100', title: 'Aquawoman', rating: 8.2},
    {id: 7, img: 'https://placehold.it/100', title: 'Aquaman', rating: 1.2}
];

const reviews = [
    { id: 1, movieId: 1 , message: 'sucffffks asssss', authorId: 1},
    { id: 2, movieId: 1 , message: 'sucks ddxasssss', authorId: 2 },
    { id: 3, movieId: 3 , message: 'suckscdcde asssss', authorId: 1 },
    { id: 4, movieId: 3 , message: 'sucksssid asssss', authorId: 4 },
    { id: 5, movieId: 5 , message: 'sucks askddssss', authorId: 2 },
    { id: 6, movieId: 1 , message: 'suddjcks asssss', authorId: 5 },
    { id: 7, movieId: 2 , message: 'suckdds asssss', authorId: 1 },
    { id: 8, movieId: 5 , message: 'sucddks asssss', authorId: 3 },
    { id: 9, movieId: 4 , message: 'sucks asssss', authorId: 3 },
    { id: 10, movieId: 4 , message: 'sudcks adsssss', authorId: 2 },
    { id: 11, movieId: 1 , message: 'sucks asdssss', authorId: 1 }
];

const users = [
    { id: 1, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 2, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 3, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 4, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 5, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 6, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 7, userName: 'plainjane', password: 'lacapinetropicana'},
    { id: 8, userName: 'plainjane', password: 'lacapinetropicana'},
]

const ReviewType = new GraphQLObjectType({
    name: 'ReviewType',
    fields: () => ({
        id: {type : GraphQLID},
        message: { type: GraphQLString},
        author: {
            type: UserType,
            resolve(parent, args){
                return users.find(user => user.id === parent.authorId);
            }
        },
        movie: {
            type: MovieType,
            resolve(parent, args){
                return movies.find(movie => movie.id === parent.movieId);
            }
        },
        rating: {type: GraphQLInt},
        whereSeen: { type: GraphQLString},
        whenSeen: { type: GraphQLString}
    })
})

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {type: GraphQLID},
        email: {type: GraphQLString},
        userName: {type: GraphQLString},
        password: {type: GraphQLString},
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve(parent, args){
                return reviews.filter(review => review.authorId === parent.id)
            }
        }
    })
})

const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        rating: { type: GraphQLInt},
        releaseDate: { type: GraphQLString },
        description: {type: GraphQLString},
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve(parent, args){
                return reviews.filter(review => review.movieId === parent.id)
            }
        },
        bgImageUrl: {type: GraphQLString},
        smImageUrl: {type: GraphQLString},
        cast: {
            type: new GraphQLList(CastMemberType),
            resolve(parent, args){}
        }
    })
})

const CastMemberType = new GraphQLObjectType({
    name: 'CastMemberType',
    fields: () => ({
        id: { type: GraphQLID},
        movieName: { type: GraphQLString },
        realName: { type: GraphQLString },
        pageLink: {type: GraphQLString },
        movieId: {type : GraphQLID}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                return movies.find(movie => movie.id === args.id)
            }
        }
    })
})

const Schema = new GraphQLSchema({
    query: RootQuery
})

export default Schema;