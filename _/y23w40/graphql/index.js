import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import {typeDefs} from "./schema.js"
import {getAllUsers,getAllProfiles,getAllDatas} from "../lib/profile.js"

const resolvers = {
    Query: {
        async users(){
            const ok = await getAllUsers()
            console.log(ok)
            return ok.users
        }
        , async profiles(){
            const ok = await getAllProfiles()
            console.log(ok)
            return ok.profiles
        }
        , async datas(){
            const ok = await getAllDatas()
            console.log(ok)
            return ok.datas.map((item,i) => {
                item.json = JSON.stringify(item.json)
                return item
            })
        }
    }
}

// server setup
const server = new ApolloServer({
    //typeDefs
    typeDefs
    //resolvers
    , resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log("Tu dois d'abord changer \"../package.json\" pour y faire apparaitre \"type:module\"\n\nserver ready on port 4000")