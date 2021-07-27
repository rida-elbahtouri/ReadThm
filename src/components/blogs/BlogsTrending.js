import {getTrendingblogs} from '../../functions/Api';
import { useState, useEffect } from 'react';

import BlogTrendingCard from './BlogTrendingCard';


const BlogsTrending = () => {
    useEffect(() => {
        getTrendingblogs()
        .then((res) => {
            setTrendingBlogs(res.data)
        })
        .catch((err) => console.log(err))
    },
    [])

    const [trendingBlogs,setTrendingBlogs] = useState(null)

    const renderHelper = (blogs) => {
        if(blogs){
             const res = blogs.map((blog, index)=>{
            return <BlogTrendingCard  key={blog.id} blog = {blog} index={index} />
        })
            return res
        }
       
    } 
    return (
        <div className="trending-blogs-cards">
            <h1 className="m-0">Trending Blogs</h1>
            {renderHelper(trendingBlogs)}
        </div>
    )
}
export default BlogsTrending;