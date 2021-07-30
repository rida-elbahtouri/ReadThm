import { useState } from "react";
import {createComment} from '../functions/Api'
import { connect } from "react-redux";
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

            }).catch(e =>{
                // add 404 page and redirect to it everytime there is unkown error
                console.log(e.response.data.message)
            })
        }
    }
    
    return (
        <div className="addcomment-form">
            <form onSubmit={CreateComment}>
                <textarea onChange={e=>setComment(e.target.value)} placeholder="what do you think?">

                </textarea>
                <input type="submit" value="Comment" className="green-btn btn" />
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser,
});

export default connect(mapStateToProps)(AddComment)
