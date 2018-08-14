// import { Author, View, FortuneCookie } from './connectors';

// Import Connectors
var facebook = require('../connectors/facebook')
var github = require('../connectors/github')


const resolvers = {
  Query: {
    testString(_,args) {
            return 'Hello World!';
        },
    getProfile(_,args) {
      return facebook.getProfile()
    },
    getGitHub(_,args) {
      return github.getRepositories()
    }
  }
}
  
  module.exports =  resolvers;