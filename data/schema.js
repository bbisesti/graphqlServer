var { makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')

// import mocks from './mocks';
var resolvers = require('./resolvers')


const typeDefs = `
  type Query {
    testString: String
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

module.exports =  schema;
