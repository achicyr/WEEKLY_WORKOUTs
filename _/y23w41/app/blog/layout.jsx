import BlogIntro,{meta,non} from "./BlogIntro.mdx"

export default function layout({children}) {
    return <main id="blog">
        {JSON.stringify(meta)}
        {non}
        <BlogIntro />
        {children}
    </main>
}
