import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { useState , useEffect } from 'react';
import { getPopulerblogs } from '../../functions/Api';
import {BlogimageRender} from '../../functions/checkPhoto'

const HeaderBlogs = () => {
    
    useEffect(() => {
        getPopulerblogs()
        .then((res) => {
            setPopulerBlogs(res.data)
        })
        .catch((err) => console.log(err))
    },
    [])

    const [populerBlogs,setPopulerBlogs] = useState(null)

    
    
    
    const renderThreeBlogs = (blogs) => {
        const res = blogs.map(blog=>{
            return <BlogCard key={blog.id} blog = {blog} />
        })
        return res
    }

    const renderHelper = (blogs) => {
        if(blogs){
            return (
        <div>
        <div className="headerblogs">
            <div className="most-readed">
            <div className="blog-content">
            <Link to={`/blog/${blogs[0].id}`}>
             <h1>{blogs[0].title}</h1>   
             </Link>
                <span>By : 
                <Link to={`/user/${blogs[0].auther.id}`}>
                    {blogs[0].auther.fullname}
                </Link>
                </span>  

            <p> {blogs[0].content.slice(0,500)}... </p>
            </div>
           {BlogimageRender(blogs[0])}
            </div>
            <div className="second-most-readed">
           {BlogimageRender(blogs[1])}
           <Link to={`/blog/${blogs[1].id}`}>
               <h1>{blogs[1].title}</h1>
            </Link>   
                <span>By : 
                    <Link to={`/user/${blogs[1].auther.id}`}>
                        {blogs[1].auther.fullname}
                    </Link>
                </span>  

            <p> {blogs[1].content.slice(0,250)} </p>
            </div>
        </div>
        <div className="trending-blogs">
            {renderThreeBlogs(blogs.slice(2,6))}
        </div>
        </div>
        )
        }
        
    }
    return (
        <div>
            {renderHelper(populerBlogs)}
        </div>
    )
}
export default HeaderBlogs;