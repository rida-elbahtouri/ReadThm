import {UserAvatarRender} from '../../functions/checkPhoto';
import {BsTrash} from "react-icons/bs";
import { Link } from 'react-router-dom';
const CommentCard = (props) => {
    const {comment} = props
    console.log(comment)
    const checkIfowner = () => {
        if(props.user && comment.commenter.id === props.user.id){
            return <button onClick={()=>props.deleteComment(comment._id)} className="delete-btn btn text-white"><BsTrash /></button> 
        }
    }
  
    return (
        <div className="comment-card">
            <Link to={`/user/${comment.commenter.id}`}>
             {(UserAvatarRender(comment.commenter))} 
             <h3>{comment.commenter.fullname} </h3>
            </Link>            
            <p>
                {comment.content}
            </p>
            {checkIfowner()}
        </div>
    )
}

export default CommentCard
