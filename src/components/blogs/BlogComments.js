import {getBlogComments , DeleteComment} from '../../functions/Api';
import AddComment from '../AddComment';
import { useEffect , useState} from 'react';
import CommentCard from './CommentCard';
import { connect } from "react-redux";

const BlogComments = (props) => {
    const {blog_id} = props
    useEffect(() => {
        getBlogComments(blog_id).then(res=>{
            setComments(res.data)
        }).catch(e=>{
            console.log(e)
        })
    },[])
 
    const [comments,setComments] = useState(null)
   
    const addCommentToList =(newcomment) => { 
        const newComments = comments
        newComments.unshift(newcomment)
        setComments(null)
        setComments(newComments)
    };

     const deleteMyCommente = (comment_id)=> {
        DeleteComment(comment_id,props.token)
        .then(res=>{
            console.log(res)
        })
        .catch((e) => {
            console.log(e.response.data.message)
        })
    }

    const commentsRender = (mycomments) => {
        if(mycomments){
            const res = mycomments.map(comment=>(
                <CommentCard key={comment.id} deleteComment={deleteMyCommente} user={props.user} comment={comment}  />
            ))
            return res
        }
    }

   
    return (
        <div className="comments-container">
            <AddComment addCommentToList={addCommentToList} token={props.token} user={props.user} blog_id={blog_id} />
            {commentsRender(comments)}
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser,
});

export default connect(mapStateToProps)(BlogComments)
