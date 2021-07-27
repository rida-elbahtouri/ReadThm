import { Link } from "react-router-dom";
import {BlogimageRender} from '../../functions/checkPhoto';

import {BiPencil} from "react-icons/bi";
import {BsTrash} from "react-icons/bs";

const userBlogs = ({blog,deletemyblog}) => {
    

    return (
       <div className="blogs-for-you-card" key={blog.id}>
        {BlogimageRender(blog)}
        <div className="blog-card-for-you-content">
         <Link to={`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
        <p>{blog.content.slice(0,100)} ...</p> 
            <div className="d-flex align-center justcont-between blog-edit">
                <Link className="edit-btn btn text-white" to={`/edit/blog/${blog.id}`}><BiPencil /></Link> 
               <button  onClick={()=>{deletemyblog(blog.id)}}
            className="delete-btn btn text-white"><BsTrash /></button> 
               </div>
        </div>
      </div>
    )
}

export default userBlogs
