/**
 * General server settings
 */

// include dotenv in project for environment variables
require('dotenv').config();

// express-js framework
const express = require('express')
const app = express()
// get graphql libraries
var { graphqlExpress, graphiqlExpress} = require('apollo-server-express')

// bodyParser for json
var bodyParser = require('body-parser')

// logging
var logger = require('./util/log')
var helmet = require('helmet')

// get port number from env file
const port = process.env.port || 3000;


// json (de)-serliazation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// cors
const CORS = require('cors');
app.use(CORS());


// helmet for security
app.use(helmet());


/**
 * App code
 */

// get schemas
var schema = require('./data/schema')

app.use('/graphql', graphqlExpress({ 
    schema,
    cacheControl: {
        defaultMaxAge: 5
    }
}));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

/**
 * Start Server
 */

 if(process.env.env === 'dev') {
    app.listen(port, () =>
    logger.info(`GraphiQL is now running on http://localhost:${port}/graphiql`)
    );
 }
