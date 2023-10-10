'use client'
// https://clerk.com/docs/components/unstyled/
import Link from 'next/link'
import { SignedOut,SignedIn,SignInButton,UserButton, useAuth, useUser } from "@clerk/nextjs"

export default () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth()
    const { isSignedIn, user } = useUser()
    // console.log(userId)
    // console.log(SignedIn)
    // console.log(SignedOut)
    if (!isLoaded || !userId) {
        // alert('ok'+isLoaded.toString())
    // if (!isLoaded || !isSignedIn) {
        return <section className='logIn'>
            <SignInButton>
                <button>Sign in with Clerk</button>
            </SignInButton>
            {/* <SignUpButton /> */}
            {/* <SignedOut>
                <SignInButton>
                    <button>Sign in with Clerk</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn> */}
        </section>
    }

    return <section className='loggedIn'>
        <span>{user.firstName}</span>
        <UserButton />
    </section>
}
