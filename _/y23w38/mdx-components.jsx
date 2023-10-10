function Ok({children}){
  return <li>
    hougahouhgag hougaaaa
    {children}
    ahhhhhhhhhh !!!!!!!!!!!
  </li>
}
function H1({children}){
  return <section>
    hougahouhgag hougaaaa
    {children}
    ahhhhhhhhhh !!!!!!!!!!!
  </section>
}

export function useMDXComponents(components) {
  return { 
    li: Ok, 
    // h1: H1, 
    ...components 
  }
}
