import { Link } from 'react-router-dom';
import {BlogimageRender,UserAvatarRender} from '../../functions/checkPhoto';
import '../../assets/styles/ResultCard.scss'
const ResultCard = (props) => {
    const blog = props.blog;
    return (
        <div className="result-card">
           {BlogimageRender(blog)}
            <div className="result-content">
            <h2><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h2>
            <Link to={`/user/${blog.auther.id}`} >
            <div className="result-card-user">
                {UserAvatarRender(blog.auther)}
               <h4>{blog.auther.fullname}</h4> 
            </div>
            </Link>
                <p>
                    {blog.content.slice(0,100)} ...
                </p>
            </div>
        </div>
    )
}

export default ResultCard
