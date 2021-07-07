import React from 'react'
import BlogsForYouCard from './BlogForYouCard'


export default function BlogsForYou(props) {
    const renderHelper = (blogs) => {
        const res = blogs.map(blog=>{
            return <BlogsForYouCard blog = {blog} />
        })
        return res
    }
    return (
        <div>
            <h1 className="text-green m-0">Curated NewsFeed</h1>
            <span className="sub-text fs-6">Made just for you</span>
            {renderHelper(props.blogs)}
        </div>
    )
}
