import 'babel-polyfill';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

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

if(process.env.NODE_ENV === 'production'){

    app.use(express.static(path.resolve('client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    })
}

app.listen(4000, () => console.log('Listening'));