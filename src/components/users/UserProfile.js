import {getUserById , getUserBlogs,getUser , deleteUser,DeleteBlog} from '../../functions/Api';
import { connect } from 'react-redux'; 
import {UserAvatarRender} from '../../functions/checkPhoto';
import {BiPencil} from "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import { useState ,useEffect } from 'react'; 
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import UserBlogs from './userBlogs';
import {getToken,getUserData} from '../../actions'
import '../../assets/styles/profile.scss'

const UserProfile =(props)=> {

      const [user,setUser] = useState(null)
      const [currentUser , setCurrentUser] = useState(false)
      const [UserNotfound, setUserNotFound] = useState(false)
      useEffect(() => {
      if(props.match.params.id) {
       getUserById(props.match.params.id).then(res =>{
              if(props.user && props.user.id === props.match.params.id){
                setCurrentUser(true)
              }
             setUser(res.data)
       }).catch(() =>{
        setUserNotFound(true)
       })

     }else {
       const token = localStorage.getItem('token')
       if(token && !props.user){
          getUser(token).then(res=>{
            setUser(res.data)
            setCurrentUser(true)
          }).catch(e=>{
            console.log(e.response)
          })
       }else if(props.user) {
          setCurrentUser(true)
          setUser(props.user)
       }
     
     }
      }, [])
     
     const [userBlogs , setUserBlogs] = useState([])
     
       if(user && userBlogs.length === 0){
        getUserBlogs(user.id).then(res =>{
          setUserBlogs(res.data.autherBlogs)
        }).catch(err => {
          console.log(err)
        })
       }

       const deletemyblog = (blog_id) => {
        DeleteBlog(blog_id,props.token).then((res) =>{
            
          const newblogs = userBlogs.filter(blog => blog.id !== blog_id);
          setUserBlogs(newblogs)

        } ).catch((err) =>{
            console.log(err)
        })
       }


       const history = useHistory();
       const deleteProfile = () => {
        deleteUser(props.token).then(() => {
          props.getToken(null)
          props.getUserData(null)
          localStorage.removeItem('token')
          history.push('/')

        }).catch(err => {
          console.log(err)
        })
       }
       const editUser = () => {
         if(currentUser){
           return (
             <div className="links-user-edit">
               <Link className="edit-btn user-btn" to="/edit/user"><BiPencil /></Link> 
               <button onClick={deleteProfile} className="delete-btn user-btn"><BsTrash /></button> 
             </div>
           )
         }
       }
      const renderBlogs= (blogs) => {
        const result = blogs.map(blog=>{
          return (
            <UserBlogs blog={blog} deletemyblog={deletemyblog} />
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
          {editUser()}
          <div className="user-info">
           
            <label className="fs-5">Full Name</label> 
            <span className="fs-5 text-green">{user.fullname}</span>
            
            <label className="fs-5">Email</label>
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
       } else if(UserNotfound) {
         return <div><h1>404 User not found</h1> </div>
       }
       else {
         return <h1>Loading</h1>
       }

     }
    return (renderIfUser(user))
}

const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser
  });

const mapDispatchToProps = dispatch => ({
    getUserData: user => {
      dispatch(getUserData(user));
    },
    getToken: token => {
        dispatch(getToken(token));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);