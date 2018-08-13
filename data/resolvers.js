// import { Author, View, FortuneCookie } from './connectors';


const resolvers = {
  Query: {
    testString(_,args) {
            return 'Hello World!';
        }
    }
}
  
  module.exports =  resolvers;