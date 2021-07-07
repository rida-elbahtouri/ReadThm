import React from 'react'
import BlogTrendingCard from './BlogTrendingCard'
export default function BlogsTrending(props) {
    
    const renderHelper = (blogs) => {
        const res = blogs.map((blog, index)=>{
            return <BlogTrendingCard blog = {blog} index={index} />
        })
        return res
    }

    
    return (
        <div className="trending-blogs-cards">
            <h1 className="m-0">Trending Blogs</h1>
            {renderHelper(props.blogs)}
        </div>
    )
}
