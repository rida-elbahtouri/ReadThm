import { connect } from 'react-redux'; 
import { useState,useEffect } from 'react';
import UpdateBlogPhoto from './UpdateBlogPhoto'; 
import {UpdateBlog ,getBlogById} from '../../functions/Api';
import {showError,showSuccess} from '../../functions/helpers'
import '../../assets/styles/editblog.scss'

const EditBlog = (props) => {
    const [blog,setBlog] = useState(null)
    const [title ,setTitle] = useState("")
    const [content ,setContent] = useState("") 
    const [successMsg,setSuccessMsg] = useState("")
    const [error,setError] = useState("")

    useEffect(()=> getBlogById(props.match.params.id).then(res=> {
        setBlog(res.data)
    }).catch(e=>{
        console.log(e)
    })
    , []);

    const handleSubmit = (e) => {
        e.preventDefault()
        UpdateBlog({title,content,id:blog.id},props.token).then(res=>{
            setSuccessMsg("Blog has been updated successfully")
            console.log(res.data)
        }).catch(e=>{
            setError(e.response.data.message)
        })
        console.log(title,content)
    }
    const renderHelper = (blog) => {
        if(blog){
            return(
                <div className="blogedit-page">
                    <UpdateBlogPhoto blog={blog} />
                   <form onSubmit={handleSubmit} className="blog-form">
                    <input onChange={(e)=>{setTitle(e.target.value)}}
                    className="blog-title" type="text" placeholder="blog title" defaultValue={blog.title} />
                    <textarea
                    placeholder="blog content"
                    onChange={(e)=>{setContent(e.target.value)}}
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

const mapStateToProps = state => ({
    token: state.Token,
});

export default connect(mapStateToProps)(EditBlog);
