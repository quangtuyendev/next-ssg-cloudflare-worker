import React from 'react'

export default function ArticleWrapper({ children }) {
    return (
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    )
}
