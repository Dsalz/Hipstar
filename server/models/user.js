import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    id: {type: String},
    email: {type: String},
    userName: {type: String},
    password: {type: String},
})

export default mongoose.model('user', UserSchema);