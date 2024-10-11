import { ApolloClient, InMemoryCache } from '@apollo/client'

// init apollo client

export const apolloClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache({
    addTypename: true
  })
});