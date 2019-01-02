import mongoose, { Schema } from 'mongoose';

const ReviewSchema = new Schema({
    message: {
        type: String
    },
    authorId: {
        type: String
    },
    movieId: {
        type: String
    },
    rating: {
        type: Number
    },
    whereSeen: { 
        type: String
    },
    whenSeen: { 
        type: String
    },
    dateCreated: { 
        type: String
    }
})

export default mongoose.model('reviews', ReviewSchema);