import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

// export async function getAllProfiles(){

//     const allUsers = await prisma.profile.findMany()
//     console.log(allUsers)
    
// }
export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}
export async function getAllProfiles() {
  try {
    const profiles = await prisma.profile.findMany()
    return { profiles }
  } catch (error) {
    return { error }
  }
}
export async function getAllDatas() {
  try {
    const datas = await prisma.data.findMany()
    return { datas }
  } catch (error) {
    return { error }
  }
}



// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })