"use client"

import { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext({});
export default GlobalContext


export const GlobalContextProvider = ({ children }) => {



    const context = {
    }

    return <GlobalContext.Provider value={context}>
        {children}
    </GlobalContext.Provider>
}
