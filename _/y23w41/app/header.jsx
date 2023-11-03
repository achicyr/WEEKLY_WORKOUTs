"use client"
import {UserButton,SignedOut,SignOutButton,SignedIn,SignInButton,SignUpButton} from "@clerk/nextjs";
import { useContext } from 'react'
import GlobalContext from "@/assets/providers/GlobalProvider"

export default function header() {

    // const {ok} = useContext(GlobalContext)

    return (
        <header className="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Simple header</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="blog" className="nav-link">Blog</a></li>
                <li className="nav-item">
                    <SignedOut><SignInButton /><SignUpButton /></SignedOut>
                    {/* <SignedIn><SignOutButton /></SignedIn> */}
                    <SignedIn><UserButton /></SignedIn>
                </li>
            </ul>
        </header>
    )
}
