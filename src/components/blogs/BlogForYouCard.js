import React from 'react';
import { Link } from 'react-router-dom';
import {BlogimageRender,UserAvatarRender} from '../../functions/checkPhoto';
export default function BlogForYouCard({blog}) {
    return (
        <div className="blogs-for-you-card">
           {BlogimageRender(blog)}
            <div className="blog-card-for-you-content">
            <h2><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h2>
            <Link to={`/user/${blog.auther.id}`} >
            <div className="blog-card-user">
                {UserAvatarRender(blog.auther)}
               <h4>{blog.auther.fullname}</h4> 
            </div>
            </Link>
                <p>
                    {blog.content.slice(0,100)} ...
                </p>
            </div>
        </div>
    )
}
