const graphQL = require('graphql');
import bcrypt from 'bcrypt';

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
    GraphQLList,
    GraphQLBoolean
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
        whenSeen: { type: GraphQLString},
        dateCreated: { type: GraphQLString}
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
            async resolve(parent, args){
               const users = await Users.find({ userName: args.userName });
               return users[0];
            }
        },
        login: {
            type: UserType,
            args: { userName: {type: GraphQLString}, password: {type: GraphQLString}},
            resolve(parent, args){
                Users.find({userName: args.userName})
                .then((user) => {
                    if (!user){
                        user = Users.find({email: args.userName})
                    }
                    if(user){
                        bcrypt.compare(password, user.password)
                        .then((rightPassword) => {
                            if(rightPassword){
                                return user;
                            }
                            return user;
                        })
                    }
                    return user;                    
                })
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
                whenSeen: { type: GraphQLString},
                dateCreated: { type: GraphQLString},
            },
            resolve(parent, args){
                const { 
                    message,
                    authorId,
                    movieId,
                    rating,
                    whereSeen,
                    whenSeen,
                    dateCreated 
                } = args;

                const newReview = new Reviews({ 
                    message,
                    authorId,
                    movieId,
                    rating,
                    whereSeen,
                    whenSeen,
                    dateCreated 
                });

                return newReview.save();
            }
        },
        signUp: {
            type: UserType,
            args: {
                email: {type: GraphQLString},
                userName: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parent, args){
                const { 
                    email,
                    userName,
                    password
                } = args;

                return bcrypt.hash(password , 5).then((hashedPassword) => {
                    const newUser = new Users({ 
                        email,
                        userName,
                        password: hashedPassword
                    });
                    newUser.save().then(user => user);
                })
                
            }
        }
    })
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});