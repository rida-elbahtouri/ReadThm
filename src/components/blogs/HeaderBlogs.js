import React from 'react'
import BlogCard from './BlogCard'
import {BlogimageRender} from '../../functions/checkPhoto'

export default function HeaderBlogs(props) {
    const renderThreeBlogs = (blogs) => {
        const res = blogs.map(blog=>{
            return <BlogCard blog = {blog} />
        })
        return res
    }

    const renderHelper = (blogs) => {
        return (
        <div>
        <div className="headerblogs">
            <div className="most-readed">
            <div className="blog-content">
             <h1>{blogs[0].title}</h1>   
                <span>By : {blogs[0].auther.fullname}</span>  

            <p> {blogs[0].content.slice(0,500)}... </p>
            </div>
           {BlogimageRender(blogs[0])}
            </div>
            <div className="second-most-readed">
           {BlogimageRender(blogs[1])}
            <h1>{blogs[1].title}</h1>   
                <span>By : {blogs[1].auther.fullname}</span>  

            <p> {blogs[1].content} </p>
            </div>
        </div>
        <div className="trending-blogs">
            {renderThreeBlogs(blogs.slice(2))}
            <div className="Seemore-link">
                See more -&gt;
            </div>
        </div>
        </div>
        )
    }
    return (
        <div>
            {renderHelper(props.blogs)}
        </div>
    )
}
