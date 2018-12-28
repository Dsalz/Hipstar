import express from 'express';
import graphQLHTTP from 'express-graphql';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//Schema
import schema from './schema';

const app = express();

//Connecting to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
.then(() => console.log('Connected to DB'))
.catch(() => console.log('Not Connected to DB'))

app.use('/graphql', graphQLHTTP({
    graphiql: true,
    schema
}))

app.listen(4000, () => console.log('Listening'));