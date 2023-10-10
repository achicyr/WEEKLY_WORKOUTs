
import { createGlobalStyle } from 'styled-components'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import {DarkModeProvider} from "./providers"
import {GlobalContextProvider} from "../assets/utils/globalContext"
import Header from "./header"
import Footer from "./footer"
import "../assets/scss/index.scss"



import "./essence-free-ud/css/bootstrap.min.css"
import "./essence-free-ud/css/line-icons.css"
import "./essence-free-ud/css/owl.carousel.css"
import "./essence-free-ud/css/owl.theme.css"
import "./essence-free-ud/css/nivo-lightbox.css"
import "./essence-free-ud/css/magnific-popup.css"
import "./essence-free-ud/css/animate.css"
import "./essence-free-ud/css/color-switcher.css"
import "./essence-free-ud/css/menu_sideslide.css"
import "./essence-free-ud/css/main.css"
import "./essence-free-ud/css/responsive.css"



const inter = Inter({ subsets: ['latin'] })

import {Montserrat} from 'next/font/google'
const ff = Montserrat({
  subsets: ['latin']
  , weight: ["300", "400", "600", "700", "800", "900", ]
  , style: ["normal", "italic"]
  // , variable: "--font-monserrat_aaaa" //COPIED FROM A NEXTJS TUTO
})



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <ClerkProvider>
        <body className={`${ff.className} ${inter.className}`}>
          <DarkModeProvider>
          <GlobalContextProvider>
            <Header />
              {children}
            <Footer />
          </GlobalContextProvider>
          </DarkModeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}


