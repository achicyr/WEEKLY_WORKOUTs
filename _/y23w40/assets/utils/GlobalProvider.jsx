"use client"

import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext()
export default GlobalContext;

export const GlobalProvider = ({children}) => {

    const context = {}

    return <GlobalContext.Provider value={context}>
        {children}
    </GlobalContext.Provider>
}


