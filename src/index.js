const ApolloServerCore = require('apollo-server-core')
const graphqlTools = require('graphql-tools')

const { ApolloServer } = require('./core')

module.exports = {
  ...ApolloServerCore,
  ...graphqlTools,
  ApolloServer
}
