import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
/*
FRONT MATTER NPM PACKAGES: 
jekyll fashion: https://www.npmjs.com/package/gray-matter
json fashion: https://www.npmjs.com/package/json-front-matter
*/

const rootDirectory = path.join(process.cwd(), 'lib/mdx/blog')

export const getPostBySlug = async slug => {
    console.log(slug)
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) if(file.indexOf('hello')==-1){
    // console.log(file);
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}