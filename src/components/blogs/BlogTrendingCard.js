import React from 'react';
import { Link } from 'react-router-dom';
import {BlogimageRender,UserAvatarRender} from '../../functions/checkPhoto'
export default function BlogTrendingCard({blog,index}) {

   
    return (
        <div className="blog-trending-card">
         <h2 className="text-green">#{index+1}</h2>
       {BlogimageRender(blog)}
       <div className="blog-card-content">
          <Link to={`/blog/${blog.id}`}><h2>{blog.title}</h2></Link> 
          <Link to={`/user/${blog.auther.id}`}>
          <div className="blog-card-user">
           {UserAvatarRender(blog.auther)}
           <h4>{blog.auther.fullname}</h4> 
          </div>
          </Link>
       </div>
        
     
    </div>
    )
}
