import React from 'react'
import BlogsForYouCard from './BlogForYouCard'


const BlogsForYou = (props) => {
    const renderHelper = (blogs) => {
        const res = blogs.map(blog=>{
            return <BlogsForYouCard key={blog.id} blog = {blog} />
        })
        return res
    }
    return (
        <div>
            <h1 className="text-green m-0">Curated NewsFeed</h1>
            <span className="sub-text fs-6">hot trending blogs from this week</span>
            {renderHelper(props.blogs)}
        </div>
    )
}
export default BlogsForYou;