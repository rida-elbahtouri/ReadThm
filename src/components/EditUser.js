import { connect } from 'react-redux'; 
import {UserAvatarRender,isPhotoValid} from '../functions/checkPhoto';
import { useState } from 'react';
import {AddAvatarToUser} from '../functions/Api';

import '../assets/styles/edituser.scss'
const EditUser = (props) => {
    const {user} = props;

    const [changePassFormClass,setChangePassFormClass] = useState("none")
    const [showAvatar , setShowAvatar] = useState(null)
    const [currentAvatar ,setCurrentAvatar] = useState(null)
   const ChangePassword = () => {
       return (
           <div className={changePassFormClass}>
                <label>Old Password</label>
                    <input
                    type="password" 
                    placeholder="Enter your old password" 
                    required />
                      <label>New Password</label>
                    <input
                    type="password" 
                    placeholder="Enter your new password" 
                    required />
                      <label>Confirm Password</label>
                    <input
                    type="password" 
                    placeholder="Confirm your new password" 
                    required />
           </div>
       )
   }

   const avatarDisplayed = (user) => {
       if(currentAvatar){
           return <img src={URL.createObjectURL(showAvatar)} alt="avatar" />
       }else {
           return UserAvatarRender(user)
       }
   }

    const HandleAvatarUpload = (e) => {
       if(isPhotoValid(e.target.files[0])){
          const avatar = e.target.files[0]
          setShowAvatar(avatar)
        const myavatar = new FormData();
        myavatar.append(
            "avatar",
            avatar,
            avatar.name
        );
        AddAvatarToUser(myavatar,props.token).then(res=> {
            setCurrentAvatar(true)
        }).catch(err=>{
            console.log(err.response)
        })

       }else{
        console.log("nt valid")
       }

    }
    const renderHelper = (user) => {
    if(user){
        return (
            <div className="edit-Profile">
                <div className="edit-profile-avatar">
                    
                {avatarDisplayed(user)}
                    <div className="inputWrapper">
                       <label>Select Avatar</label> 
                         <input 
                         onChange={e => HandleAvatarUpload(e)}
                         className="fileInput" type="file" accept="image/*" />
                    </div>

                </div>
                <form className="edituser-form">
                    <label>Full Name</label>
                    <input
                    type="text" 
                    value={user.fullname}
                    placeholder="Enter your full name" 
                    required />

                <label>Email</label>
                    <input
                    type="email" 
                    value={user.email}
                    placeholder="Enter your email" 
                    required />
                    {ChangePassword()}
                   
                    <button onClick={()=>{setChangePassFormClass("d-block")}} className="text-green" type="button">I want to change my password</button>
                   
                   <input type="submit" value="Save" className="btn green-btn" />

                </form>
            </div>
        )
    }
   }
   
    return (
        <div>
            {renderHelper(user)}
        </div>
    )
}
const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser
  });
  export default connect(mapStateToProps)(EditUser);