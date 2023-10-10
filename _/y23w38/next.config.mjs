import nextMDX from "@next/mdx"
// JE ME LE FICHIER DE CONFIGURATION DE NEXTJS EN mjs 
// PARCEQUE LA PLUPART DES PLUGINS MDX SONT ESM COMPATIBLE
// ET ILS NE FONCTIONNERAIENT PAS SANS UN FICHIER DE CONFIG NEXT NON ESM
// ...mais je crois que c'est pas vrai, cela peut se faire sans esm module

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: []
    , rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true
    , mdxRs: true
    , serverActions: true
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  }
}

export default withMDX(nextConfig)
