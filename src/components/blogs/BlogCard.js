import React from 'react'
import {BlogimageRender} from '../../functions/checkPhoto'
import { Link } from 'react-router-dom';

export default function BlogCard(props) {
    return (
        <div className="blog-card">
            <div className="blog-card-header">
                <div className="card-img">
               {BlogimageRender(props.blog)}
                 </div> 
          <div className="card-header">
            <h2><Link to={`/blog/${props.blog.id}`}>{props.blog.title}</Link></h2>
            <span>By <Link to={`/user/${props.blog.auther.id}`}>{props.blog.auther.fullname}</Link></span>
            </div>
            </div>
            <p>{props.blog.content.slice(0,100)}</p>
        </div>
    )
}
