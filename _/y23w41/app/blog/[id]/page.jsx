import { getPostBySlug } from "@/lib/mdx"

export default async function page({ params }) {
    const { id } = params
    , post = await getPostBySlug(id)
    console.log(post)
    
    return <>
        <h2>{post.meta.title}</h2>
        <p>{post.content}</p>
    </>
}
