import express from 'express';
import graphQLHTTP from 'express-graphql';

//Schema
import schema from './schema';

const app = express();

app.get('/graphql', graphQLHTTP({
    graphiql: true,
    schema
}))

app.listen(4000, () => console.log('Listening'));