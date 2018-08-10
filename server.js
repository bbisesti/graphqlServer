require('dotenv').config();
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

// logging
import logger from './util/log';

const GRAPHQL_PORT = process.env.port || 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  logger.info(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`)
);
