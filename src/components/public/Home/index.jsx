import React from 'react'
import { Outlet } from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'
import Body from "../Body"
function Home() {
    return (
        <>
            <Header />
            <Body/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}


export default Home