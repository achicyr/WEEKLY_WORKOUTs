// int, float, string, boolean, ID
// import {getAllUsers,getAllPosts} from "@/lib/prisma"
import {getAllUsers,getOneUser,createUser,updateUser,deleteUser,getAllPosts,getOnePost,createPost,deletePost} from "../prisma/index.js"

export const typeDefs = `#graphql
    type User {
        id: ID!
        email: String!
        name: String!
        posts: [Post!]
    }
    type Post {
        id: ID!
        title:     String!
        content:   String!
        published: Boolean!
        author:  User!
        authorId:  Int!
    }
    type Query {
        users: [User]
        user(id: ID!): User
        posts: [Post]
        post(id: ID!): Post
    }
    type Mutation {
        createUser(userRequiredProperties: CreateUserInput!): User
        updateUser(id: ID!, update: UpdateUserInput!): User
        deleteUser(id: ID!): [User]
        createPost(postRequiredProperties: CreatePostInput!): Post
        deletePost(id: ID!): [Post]
    }
    # input KEY WORD IS
    # TO CREATE A COLLECTION OF FIELDS
    # WE CAN YOU IN A MUTATION (AS A SINGLE ARGUMENT FOR EXAMPLE)
    input CreateUserInput {
        email: String!
        name: String!
        # posts: [Post!]
    }
    input UpdateUserInput {
        email: String
        name: String
        posts: String
    }
    input CreatePostInput {
        title:     String!
        content:   String!
        published: Boolean !
        # author:  User!
        authorId:  Int!
    }
`
export const resolvers = {
    Query: {
        async users(){
            return await getAllUsers()
        }
        , async user(parent,args,context){
            return await getOneUser({id:parseInt(args.id)})
        }
        , async posts(){
            return await getAllPosts()
        }
        , async post(parent,args,context){
            return await getOnePost({id:parseInt(args.id)})
        }
    }
    , User: {
        async posts(parent){
            return await getAllPosts({authorId:parseInt(parent.id)})
        }
    }
    , Post: {
        async author(parent,args){
            // const ok = await getOneUser({id:parseInt(parent.authorId)})
            // return ok
            return await getOneUser({id:parseInt(parent.authorId)})
        }
    }
    , Mutation: {
        // async deleteUser(parent,args){
        //     return await deleteUser({id:parseInt(args.id)})
        // }, 
        createUser: async (parent,args) => await createUser(args.posts ? {...args.userRequiredProperties, posts:args.posts} : {...args.userRequiredProperties})
        , updateUser: async (parent,args) => await updateUser({id:parseInt(args.id)},{...args.update})
        , deleteUser: async (parent,args) => await deleteUser({id:parseInt(args.id)})
        , createPost: async (parent,args) => await createPost(args.authorId ? {...args.postRequiredProperties, authorId:args.authorId} : {...args.postRequiredProperties})
        , deletePost: async (parent,args) => await deletePost({id:parseInt(args.id)})
    }
}
