import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import "../assets/scss/index.scss"
import Header from "./header"
import Footer from "./footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WORKOUT y23w42: firebase',
  description: 'clerck,B5LandingPage(w/ B5 components),prisma(w/firebase (new)),graphql,context,themeProvider,mdx(blog),add new B5 components',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter?.className}>
        <ClerkProvider>
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  )
}
