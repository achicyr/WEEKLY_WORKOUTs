export const typeDefs = `#graphql
    type User {
        id: ID!,
        name: String!
    }
    type Profile {
        id: ID!,
        bio: String!
    }
    type Data {
        id: ID!,
        json: String!
    }
    type Query {
        users: [User]
        datas: [Data]
        profiles: [Profile]
    }
`

//int, float, string, boolean, ID