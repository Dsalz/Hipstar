import mongoose, { Schema } from 'mongoose';

const CastSchema = new Schema({
    movieName: { type: String },
    realName: { type: String },
    pageLink: {type: String },
    movieId: {type : String}
})

export default mongoose.model('cast', CastSchema);