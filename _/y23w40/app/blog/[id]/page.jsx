import { getPostBySlug } from "../../../lib/mdx"



export default async function page({ params }) {
    const post = await getPostBySlug(params.id)
    console.log(post)

    return (
            <div>
                {JSON.stringify(post)}
                {post.content}
            </div>
    )
}
