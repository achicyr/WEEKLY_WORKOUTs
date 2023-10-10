import {getPostBySlug} from '../../../lib/mdx'

export default async ({params}) => {
    const {id} = params
    console.log("oiok")
    console.log(id)
    const {content} = await getPostBySlug(id)

    return <section>
        <h1>CONTENU  DU POST: </h1>
        {content}
    </section>
}
