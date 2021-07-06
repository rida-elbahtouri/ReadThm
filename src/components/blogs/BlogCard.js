import React from 'react'

export default function BlogCard(props) {
    return (
        <div className="blog-card">
            <div className="blog-card-header">
                <div className="card-img">
                <img src="https://images.pexels.com/photos/6146737/pexels-photo-6146737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                 </div> 
          <div className="card-header">
            <h2>{props.blog.title}</h2>
            <span>By {props.blog.auther.fullname}</span>
            </div>
            </div>
            <p>{props.blog.content}</p>
        </div>
    )
}
