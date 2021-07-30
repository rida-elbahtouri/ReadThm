import {getBlogComments} from '../../functions/Api';
import AddComment from '../AddComment';
import { useEffect , useState} from 'react';
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
   
    const addCommentToList =(newcomment) => { 
        const newComments = comments
        newComments.unshift(newcomment)
        setComments(null)
        setComments(newComments)
    };

    
    const commentsRender = (mycomments) => {
        if(mycomments){
            const res = mycomments.map(comment=>(
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
