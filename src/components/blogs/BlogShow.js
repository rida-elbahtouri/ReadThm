import {useState,useEffect} from 'react'
import {getBlogById} from '../../functions/Api';
import {BlogimageRender} from '../../functions/checkPhoto';

export default function BlogShow(props) {

    const [blog,setBlog] = useState({})
    
    useEffect(()=> getBlogById(props.match.params.id).then(res=> {
        setBlog(res.data)
    }).catch(e=>{
        console.log(e)
    })
    , []);
    

    const renderHelper = (blog) => {
        if(blog){
            return(
                <div>
                    <h1>{blog.title}</h1>
                    {BlogimageRender(blog)}
                    <p>{blog.content}</p>
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
