import { useState } from "react";
import {createComment} from '../functions/Api'

const AddComment = (props) => {
    const [comment,setComment] = useState("");
   
    const CreateComment = (e) => {
        e.preventDefault();
        if(comment){
            createComment(comment,props.blog_id,props.token).then(res=>{
                const comment = res.data
                comment.commenter = {
                    id:res.data.commenter,
                    fullname:props.user.fullname
                }
                props.addCommentToList(comment)
                document.getElementById('comment-box').value=""
            }).catch(e =>{
                console.log(e)
            })
        }
    }
    
    return (
        <div className="addcomment-form">
            <form onSubmit={CreateComment}>
                <textarea id="comment-box" onChange={e=>setComment(e.target.value)} placeholder="what do you think?">

                </textarea>
                <input type="submit" value="Comment" className="green-btn btn" />
            </form>
        </div>
    )
}


export default AddComment
