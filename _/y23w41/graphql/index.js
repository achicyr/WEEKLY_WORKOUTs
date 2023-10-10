import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {getAllProfiles,getAllPosts,getAllDatas} from "../lib/prisma/index.js"

const profiles = await getAllProfiles()
, posts = await getAllPosts()
, datas = await getAllDatas()
, typeDefs = `#graphql
    type Profile {
        id: ID!
        , name: String!
        , email: String!
    }
    type Post {
        id: ID!
        , title: String!
        , content: String
        , published: Boolean
        , authorId: Int!
    }
    type Data {
        id: ID!
        , json: String!
        , ownerId: Int!
    }
    type Query {
        profiles: [Profile]
        , posts: [Post]
        , datas: [Data]
    }
`
, resolvers = {
    Query: {
        profiles(){return profiles}
        , posts(){return posts}
        , datas(){return datas}
    }
}
, server = new ApolloServer({
    typeDefs,
    resolvers,
  })
, { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`);
