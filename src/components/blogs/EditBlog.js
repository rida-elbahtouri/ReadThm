import { connect } from 'react-redux'; 
import { useState,useEffect } from 'react';
import UpdateBlogPhoto from './UpdateBlogPhoto';
import { getToken } from '../../actions' 
import {UpdateBlog ,getBlogById} from '../../functions/Api';
import {showError,showSuccess} from '../../functions/helpers'
import '../../assets/styles/editblog.scss'

const EditBlog = (props) => {
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
                <div className="blogedit-page">
                    <UpdateBlogPhoto blog={blog} />
                   <form className="blog-form">
                    <input className="blog-title" type="text" placeholder="blog title" defaultValue={blog.title} />
                    <textarea
                    placeholder="blog content"
                    defaultValue={blog.content}
                    required ></textarea>
                    <input type="submit" value="Save" className="btn green-btn" />
                    </form>
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

export default EditBlog
