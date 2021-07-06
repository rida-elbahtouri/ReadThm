import React from 'react'
import BlogCard from './BlogCard'


export default function HeaderBlogs(props) {
    console.log(props.blogs)

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

            <p> {blogs[0].content} </p>
            </div>
            <img src="https://images.pexels.com/photos/6146737/pexels-photo-6146737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div className="second-most-readed">
            <img src="https://images.pexels.com/photos/6146737/pexels-photo-6146737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <h1>{blogs[1].title}</h1>   
                <span>By : {blogs[1].auther.fullname}</span>  

            <p> {blogs[1].content} </p>
            </div>
        </div>
        <div className="trending-blogs">
            {renderThreeBlogs(blogs.slice(2))}
            <div>
                See more
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
