import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function getAllUsers(include=false){
    const users = await prisma.user.findMany(include&&{include:{posts:true}})
    return users
}
export async function getOneUser({id,include=false}){
    include = include?{include:{posts:true}}:{}
    const user = await prisma.user.findUnique({where: {id}, ...include})
    return user
}
export async function createUser(data,returnAllDatas=false){
    const user = await prisma.user.create({data})
    console.log('An new user was created successfully: ', user)
    return !returnAllDatas ? user : await getAllUsers()
}
export async function updateUser(where,data,returnAllDatas=false){
    /*
    let all = []
    , posts = data.posts.split(',')
    // console.log(posts)
    posts.forEach((item,i) => {
        all.push(new Promise((res,rej) => {res(getOnePost({id:parseInt(item)}))}))
    })
    posts = await Promise.all(all)
    // console.log(posts)
    // console.log(posts[0].pending)
    // console.log(Object.keys(posts[0]))
    // console.log('---')
    data = await data.posts && await {
        ...data
        , posts
    }
    // console.log(data)
    */


    let {email,name,posts} = data
    , all = []

    data = {email,name}

    posts.split(',').forEach((item,i) => {
        all.push(new Promise((res,rej) => {res(updatePost({id:parseInt(item)}, {authorId:where.id}))}))
    })
    posts = await Promise.all(all)
    const user = await prisma.user.update({where,data})
    console.log('An user was successfully updated: ', user)
    return !returnAllDatas ? user : await getAllUsers()
}
export async function deleteUser(where,returnDeletedData=false){
    const user = await prisma.user.delete({where})
    console.log('An user was deleted successfully: ', user)
    return returnDeletedData ? user : await getAllUsers()
}
export async function getAllPosts(options={authorId:false,include:false}){
    let {authorId,include} = options
    include = include?{include:{author:true}}:{}
    const posts = await prisma.post.findMany(authorId?{where: {authorId}, ...include}:{...include})
    return posts
}
export async function getOnePost({id,include=false}){
    include = include?{include:{author:true}}:{}
    const post = await prisma.post.findUnique({where: {id}, ...include})
    return post
}
export async function createPost(data,returnAllDatas=false){
    const post = await prisma.post.create({data})
    console.log('A post was deleted successfully: ', post)
    return !returnAllDatas ? post : await getAllPosts()
}
export async function updatePost(where,data,returnAllDatas=false){
    const post = await prisma.post.update({where,data})
    console.log('A post was successfully updated: ', post)
    return !returnAllDatas ? post : await getAllPosts()
}
export async function deletePost(where,returnDeletedData=false){
    const post = await prisma.post.delete({where})
    console.log('A post was deleted successfully: ', post)
    return returnDeletedData ? post : await getAllPosts()
}


