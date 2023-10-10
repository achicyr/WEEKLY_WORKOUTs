import { getAllPostsMeta } from '../../lib/mdx'
import Link from 'next/link'

export default async function page() {
  const posts = await getAllPostsMeta()
  return <>
    <p>

      L'objet compileMDX de next-mdx-remote/rsc prend en charge les options suivantes :
      <br />
      source : Le contenu MDX à compiler. Cela peut être une chaîne, un objet Buffer ou un objet File.
      options : Un objet qui spécifie les options de compilation.
      Les options suivantes sont disponibles dans l'objet options :
      source : Le contenu MDX à compiler. Cela peut être une chaîne, un objet Buffer ou un objet File.
      <br />
      parseFrontmatter : Indique si la frontmatter doit être extraite du contenu MDX. La valeur par défaut est true.
      outputFormat : Indique le format de sortie de la compilation. Les valeurs possibles sont function-body, module et string. La valeur par défaut est function-body.
      useDynamicImport : Indique si les déclarations d'importation doivent être compilées en expressions d'importation dynamiques. La valeur par défaut est false.
      baseUrl : La base d'URL pour résoudre les importateurs relatifs.
      jsxRuntime : Le runtime JSX à utiliser pour la compilation. Les valeurs possibles sont automatic, jsx et jsxdev. La valeur par défaut est automatic.
      experimental : Un objet qui spécifie les options de compilation expérimentales.
      Dans le code que vous avez fourni, l'option parseFrontmatter est définie sur true. Cela signifie que la frontmatter sera extraite du contenu MDX et renvoyée dans l'objet frontmatter.
      <br />
      Les autres options peuvent être utilisées pour personnaliser la compilation MDX. Par exemple, vous pouvez utiliser l'option outputFormat pour spécifier que vous souhaitez que la compilation renvoie un module JavaScript ou une chaîne de caractères. Vous pouvez également utiliser l'option useDynamicImport pour compiler les déclarations d'importation en expressions d'importation dynamiques.
    </p>
    <hr />
    {posts.map((item,i) => <Link href={`blog/${item.slug}`}>
      <h3>{item.title}</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero aut asperiores molestiae quidem impedit voluptate fugit voluptatem nesciunt soluta aperiam aliquid harum praesentium, officia vel reprehenderit repudiandae ad reiciendis?</p>
    </Link>)}
  </>
}
