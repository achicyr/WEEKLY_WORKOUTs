import Link from 'next/link'
// import { getAllPostsMeta } from "@/lib/MDX"
import { getAllPostsMeta } from "../../lib/mdx"


export default async function page() {

    const posts = await getAllPostsMeta()
    console.log(posts)

    return (
        <ul>
            {posts.map((item,i) => <li><Link href={"/blog/"+item.slug}>
                {JSON.stringify(item)}
            </Link></li>)}
        </ul>
    )
}
