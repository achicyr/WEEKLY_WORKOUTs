export function useMDXComponents(components){
    return {
        ...components
        , h2: ({children}) => <h2 style={{color:"red"}}>___________{children}</h2>
    }
}