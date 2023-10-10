import { MDXProvider } from '@mdx-js/react'
import DarkModeProvider from "./themeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark,shadesOfPurple,neobrutalism } from "@clerk/themes";
import { Inter } from 'next/font/google'
import Header from "./header"
import Footer from "./footer"
import {GlobalProvider} from "../assets/utils/GlobalProvider"
import "../assets/scss/index.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WORKOUT 2023 semaine 40',
  description: 'Next,Clerk,Prisma-SQL-GraphQL,B5-HomePage,parallax,darkMode,MDX-blogPage,StyleGuide-gb-colors-fonts-icons-avatars....',
}
/*
const components = {
    h2: <h2 style={{ background: "black", color: "white" }}></h2>
}
*/

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <DarkModeProvider>
          <GlobalProvider>
            <ClerkProvider appearance={{baseTheme: dark}}>
              <Header />
              {/* <MDXProvider components={components}> */}
                {children}
              {/* </MDXProvider> */}
            </ClerkProvider>
          </GlobalProvider>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  )
}
