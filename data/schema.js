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
    viewer: GitHubViewer
  }

  type GitHubViewer {
    name: String
    repositories: GitHubNodes
  }

  type GitHubNodes {
    nodes: [GitHubRepository]
  }

  type GitHubRepository {
    name: String
    createdAt: String
    url: String
    homepageUrl: String
    languages: GitHubLanguageNodes
  }

  type GitHubLanguageNodes {
    nodes: [GitHubLanguage]
  }

  type GitHubLanguage {
    name: String
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

module.exports =  schema;
