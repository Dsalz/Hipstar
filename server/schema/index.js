const graphQL = require('graphql');

//Models
import Movies from '../models/movie';
import Reviews from '../models/review';
import CastMembers from '../models/cast';
import Users from '../models/user';

const {
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLList
} = graphQL;

const ReviewType = new GraphQLObjectType({
    name: 'ReviewType',
    fields: () => ({
        id: {type : GraphQLID},
        message: { type: GraphQLString},
        author: {
            type: UserType,
            resolve(parent, args){
                return Users.findById(parent.authorId)
            }
        },
        movie: {
            type: MovieType,
            resolve(parent, args){
                return Movies.findById(parent.movieId);
            }
        },
        rating: {type: GraphQLFloat},
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
                return Reviews.find({authorId: parent._id})
            }
        }
    })
})

const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        rating: { type: GraphQLFloat},
        releaseDate: { type: GraphQLString },
        description: {type: GraphQLString},
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve(parent, args){
                return Reviews.find({ movieId: parent._id})
            }
        },
        bgImageUrl: {type: GraphQLString},
        smImageUrl: {type: GraphQLString},
        cast: {
            type: new GraphQLList(CastMemberType),
            resolve(parent, args){
                return CastMembers.find({ movieId: parent._id})
            }
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
        movieId: {type : GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { title: { type: GraphQLString}},
            resolve(parent, args){
                return Movies.find({title: args.title})
            }
        },
        user: {
            type: UserType,
            args: { userName: {type: GraphQLString}},
            resolve(parent, args){
                return Users.find({ userName: args.userName })
            }
        },
        login: {
            type: UserType,
            args: { userName: {type: GraphQLString}, password: {type: GraphQLString}},
            resolve(parent, args){
                return Users.find({userName: args.userName, password: args.password})
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args){
                return Movies.find();
            }
        },
        // recentlyReviewedMovies: {
        //     type: new GraphQLList(MovieType),
        //     resolve(parent, args){
        //         return Movies.find();
        //     }
        // }
    })
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addReview: {
            type: ReviewType,
            args: {
                message: {type: GraphQLString},
                authorId: {type: GraphQLString },
                movieId: {type: GraphQLString },
                rating: {type: GraphQLFloat },
                whereSeen: { type: GraphQLString},
                whenSeen: { type: GraphQLString}
            },
            resolve(parent, args){
                const { 
                    message,
                    authorId,
                    movieId,
                    rating,
                    whereSeen,
                    whenSeen 
                } = args;

                const newReview = new Reviews({ 
                    message,
                    authorId,
                    movieId,
                    rating,
                    whereSeen,
                    whenSeen 
                });

                return newReview.save();
            }
        }
    })
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});