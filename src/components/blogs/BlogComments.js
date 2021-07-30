import {getBlogComments} from '../../functions/Api';
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
            {commentsRender(comments)}
        </div>
    )
}

export default BlogComments
