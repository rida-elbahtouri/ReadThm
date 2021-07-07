import React from 'react'

export default function BlogForYouCard({blog}) {
   console.log(blog)
    return (
        <div className="blogs-for-you-card">
            <img src="https://source.unsplash.com/random" />
            <div className="blog-card-for-you-content">
            <h2>{blog.title}</h2>

            <div className="blog-card-user">
                <img src={`http://localhost:3000/users/${blog.auther.id}/avatar`} />
               <h4>{blog.auther.fullname}</h4> 
            </div>
                <p>
                    {blog.content.slice(0,100)} ...
                </p>
            </div>
        </div>
    )
}
