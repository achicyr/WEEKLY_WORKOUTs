"use client"

import {createContext} from 'react'



const GlobalContext = createContext()
export default GlobalContext

export function GlobalContextProvider({children}){


    const context = {
        ok: "ok"
    }
    
    return <GlobalContext.Provider value={context}>
        {children}
    </GlobalContext.Provider>
}


