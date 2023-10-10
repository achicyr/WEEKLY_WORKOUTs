"use client"

import { ThemeProvider } from 'next-themes'


export const DarkModeProvider = ({children}) => <ThemeProvider 
    attribute="class" 
    // enableSystem={false}
    // themes={['pink', 'red', 'blue']}
>
    {children}
</ThemeProvider>