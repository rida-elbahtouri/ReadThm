import {getUserById , getUserBlogs} from '../functions/Api';
import { connect } from 'react-redux'; 
import {UserAvatarRender , BlogimageRender} from '../functions/checkPhoto'
import { useState } from 'react'; 
import '../assets/styles/profile.scss'

const UserProfile =(props)=> {

      let user;
      let currentuser;
     if(props.match.params.id) {
       getUserById(props.match.params.id).then(res =>{
             user = res.data
       })
     }else {
         user = props.user
         currentuser = true;
     }
     const [userBlogs , setUserBlogs] = useState([])
     
       if(user){
        getUserBlogs(user.id).then(res =>{
          setUserBlogs(res.data.autherBlogs)
        }).catch(err => {
          console.log(err.response.message)
        })
       }

      const renderBlogs= (blogs) => {
        const result = blogs.map(blog=>{
          return (
            <div className="blogs-for-you-card" key={blog.id}>
              {BlogimageRender(blog)}
              <div className="blog-card-for-you-content">
              <h2>{blog.title}</h2>
              <p>{blog.content.slice(0,100)} ...</p> 
              </div>
            </div>
          )
        })
        return result;
      }
     const renderIfUser = (user) => {
       if(user){
         return(
          <div className="user-Profile">
          <div className="user-profile-data">
          <div className="user-avatar">
            {UserAvatarRender(user)}
          </div>
          <div className="user-info">
            <label className="fs-5">Full Name :</label> 
            <span className="fs-5 text-green">{user.fullname}</span>
            <label className="fs-5">Email :</label>
            <a target="_blank" href={`mailto: ${user.email}`} className="fs-5 text-green">{user.email}</a> 
          </div>
          </div>

          <div className="user-blogs-section">
          <p className="text-green fs-4">
            Blogs number : {userBlogs.length}
          </p>

          <div className="user-blogs">
              {renderBlogs(userBlogs)}
          </div>
          </div>
        </div>
         )
       } else {
         return <div><h1>404 User not found</h1> </div>
       }

     }
    return (renderIfUser(user))
}

const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser
  });


export default connect(mapStateToProps)(UserProfile);