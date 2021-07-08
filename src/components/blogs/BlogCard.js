import React from 'react'
import {BlogimageRender} from '../../functions/checkPhoto'
export default function BlogCard(props) {
    return (
        <div className="blog-card">
            <div className="blog-card-header">
                <div className="card-img">
               {BlogimageRender(props.blog)}
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
