import React from 'react'
import {BlogimageRender} from '../../functions/checkPhoto'
export default function BlogTrendingCard({blog,index}) {

   
    return (
        <div className="blog-trending-card">
         <h2 className="text-green">#{index+1}</h2>
       {BlogimageRender(blog)}
       <div className="blog-card-content">
           <h2>{blog.title}</h2>
          <div className="blog-card-user">
            <img src={`http://localhost:3000/users/${blog.auther.id}/avatar`} />
           <h4>{blog.auther.fullname}</h4> 
        </div>
       </div>
        
     
    </div>
    )
}
