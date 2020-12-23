import React from 'react'
import Jumbotron from '../Jumbotron'

export default function Layout({
    children
}) {
    return (
        <main>
            <Jumbotron />
            {children}
        </main>
    )
}
