var { makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')

// import mocks from './mocks';
var resolvers = require('./resolvers')


const typeDefs = `
  type Query {
    testString: String,
    getProfile: Facebook,
    getGitHub: GitHub
  }

  type Facebook {
    id: Int,
    name: String,
    about: String,
    birthday: String
  }

  type GitHub {
    viewer: GHViewer
  }

  type GHViewer {
    name: String
    repositories: GHRepoNodes
  }

  type GHRepoNodes {
    nodes: [GHRepository]
  }

  type GHRepository {
    name: String
    createdAt: String
    url: String
    homepageUrl: String
    primaryLanguage: GHPrimaryLanguage
    languages: GHLngEdges
  }

  type GHPrimaryLanguage {
    color: String
    name: String
  }

  type GHLngEdges {
    edges: [GHLanguageEdges]
  }

  type GHLanguageEdges {
    node: GHLanguage
    size: Int
  }

  type GHLanguage {
    name: String
    color: String
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

module.exports =  schema;
