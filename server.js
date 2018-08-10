/**
 * General server settings
 */

// include dotenv in project for environment variables
require('dotenv').config();

// express-js framework
import express from 'express';

// get graphql libraries
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

// bodyParser for json
import bodyParser from 'body-parser';

// logging
import logger from './util/log';

import helmet from 'helmet';


const app = express();

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
import schema from './data/schema';

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

/**
 * Start Server
 */

 if(process.env.env === 'dev') {
    app.listen(port, () =>
    logger.info(`GraphiQL is now running on http://localhost:${port}/graphiql`)
    );
 }
