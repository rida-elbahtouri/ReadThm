import {getBlogComments} from '../../functions/Api';
import AddComment from '../AddComment';
import { useEffect , useState } from 'react';
import CommentCard from './CommentCard';


const BlogComments = ({blog_id}) => {
    useEffect(() => {
        getBlogComments(blog_id).then(res=>{
            setComments(res.data)
        }).catch(e=>{
            console.log(e)
        })
    },[])
    
    const [comments,setComments] = useState(null)
    const addCommentToList = (newcomment) => {
        const newComment = comments
        newComment.push(newcomment)
        setComments(newComment)
        console.log(comments)
    }
    const commentsRender = (comments) => {
        if(comments){
            const res = comments.map(comment=>(
                <CommentCard key={comment.id} comment={comment}  />
            ))
            return res
        }
    }
    return (
        <div className="comments-container">
            <AddComment addCommentToList={addCommentToList} blog_id={blog_id} />
            {commentsRender(comments)}
        </div>
    )
}

export default BlogComments
