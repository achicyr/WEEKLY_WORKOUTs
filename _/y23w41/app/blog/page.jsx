import Link from "next/link"
import { getAllPostsMeta } from "@/lib/mdx"

export default async function page() {
    const posts = await getAllPostsMeta()
    return <ul>
        {posts.map((item, i) => <li>
            <Link href={"blog/"+item.slug}>
                {item.title} - {item.slug}
            </Link>
        </li>)}
    </ul>
}
