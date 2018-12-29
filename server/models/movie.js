import mongoose, { Schema } from 'mongoose';

const MovieSchema = new Schema({
    title: {type: String},
    rating: { type: Number},
    releaseDate: { type: String },
    description: {type: String},
    bgImageUrl: {type: String},
    smImageUrl: {type: String},
})

export default mongoose.model('movies', MovieSchema);