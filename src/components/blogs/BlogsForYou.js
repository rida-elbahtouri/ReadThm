import {getHotblogs, getNewblogs} from '../../functions/Api';
import { useState, useEffect } from 'react';
import BlogsForYouCard from './BlogForYouCard'


const BlogsForYou = () => {
    
    useEffect(() => {
        getHotblogs()
        .then((res) => {
            if(res.data && res.data.length < 5){
                getNewblogs().then((res)=>{
                    setHotBlogs(res.data) 
                } )
            }else {
               setHotBlogs(res.data) 
            }
            
        })
        .catch((err) => console.log(err))
    },
    [])

    const [hotBlogs,setHotBlogs] = useState(null)

   
    const renderHelper = (blogs) => {
        if(blogs){
             const res = blogs.map(blog=>{
            return <BlogsForYouCard key={blog.id} blog = {blog} />
        })
        return res
        }
       
    }
    return (
        <div>
            <h1 className="text-green m-0">Curated NewsFeed</h1>
            <span className="sub-text fs-6">hot trending blogs from this week</span>
            {renderHelper(hotBlogs)}
        </div>
    )
}
export default BlogsForYou;