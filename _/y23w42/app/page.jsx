import Link from 'next/link'
import Image from 'next/image'
import Hello from "./Hello.mdx"
import styles from './page.module.scss'
import {getAllUsers,getAllPosts} from "@/lib/prisma"

export default async function Home() {

  const users = await getAllUsers(true)
  const posts = await getAllPosts(true)
  const post = await getAllPosts({id:1,include:true})
  // console.log(users)
  // console.log(posts)
  
  return (
    <main className={styles.main}>
      {JSON.stringify(users)}
      {JSON.stringify(posts)}
      {JSON.stringify(post)}
      <hr />
      <Hello />
      <div>deoijoifdjoijfds</div>
    </main>
  )
}
