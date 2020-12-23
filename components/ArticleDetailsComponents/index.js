import Layout from 'components/Shared/Layout'
import React from 'react'
import ArticleDetails from './ArticleDetails'

export default function ArticleDetailsComponents({ article }) {
    return (
        <Layout>
            <ArticleDetails {...article} />
        </Layout>
    )
}
