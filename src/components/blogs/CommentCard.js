import {UserAvatarRender} from '../../functions/checkPhoto';
import { Link } from 'react-router-dom';
const CommentCard = (props) => {
    const {comment} = props
    return (
        <div className="comment-card">
            <Link to={`/user/${comment.commenter.id}`}>
             {(UserAvatarRender(comment.commenter))} 
             <h3>{comment.commenter.fullname} </h3>
            </Link>            
            <p>
                {comment.content}
            </p>
        </div>
    )
}

export default CommentCard
