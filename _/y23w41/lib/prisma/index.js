import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllProfiles(){

    const profiles = await prisma.profile.findMany()
    return profiles
}
export async function getAllPosts(){

    const posts = await prisma.post.findMany()
    return posts
}
export async function getAllDatas(){

    const datas = await prisma.data.findMany()
    return datas
}