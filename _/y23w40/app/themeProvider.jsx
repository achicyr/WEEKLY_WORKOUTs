"use client"

import { ThemeProvider } from "next-themes";

export default ({children}) => <ThemeProvider
    attribute="class" 
>
    {children}
</ThemeProvider>