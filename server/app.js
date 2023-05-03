const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

// to solve issues run "npm install express-graphql --save --force"

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://denis:test123@gql-ninja.le44fjb.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to a db')
})

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);

app.listen(4000, () => {
    console.log('now listening or requests on port 4000')
});