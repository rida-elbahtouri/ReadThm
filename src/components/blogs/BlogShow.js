import {useState,useEffect} from 'react'
import {getBlogById} from '../../functions/Api';
import {BlogimageRender,UserAvatarRender} from '../../functions/checkPhoto';
import {Link} from 'react-router-dom'

import '../../assets/styles/blogpage.scss';


export default function BlogShow(props) {

    const [blog,setBlog] = useState(null)
    
    useEffect(()=> getBlogById(props.match.params.id).then(res=> {
        setBlog(res.data)
    }).catch(e=>{
        console.log(e)
    })
    , []);
    

    const renderHelper = (blog) => {
        if(blog){
            return(
                <div className="blogshow-page">
                    <h1>{blog.title}</h1>
                    <Link to={`/user/${blog.auther.id}`}  className="user-info">
                        {UserAvatarRender(blog.auther)}
                        <h3>By {blog.auther.fullname}</h3>
                    </Link >
                    <div className="blog-content">
                    {BlogimageRender(blog)}
                  
                    <p>{blog.content}</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderHelper(blog)}
        </div>
    )
}
