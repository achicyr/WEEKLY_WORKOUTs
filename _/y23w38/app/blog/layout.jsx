import Hello from './Hello.mdx'

export default function layout({children}) {
  return <main id="blog">
    <Hello />
    {children}
  </main>
}
