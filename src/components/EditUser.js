import { connect } from 'react-redux'; 
import {UserAvatarRender} from '../functions/checkPhoto';
import { useState } from 'react';
import '../assets/styles/edituser.scss'
const EditUser = (props) => {
    const {user} = props;

    const [changePassFormClass,setChangePassFormClass] = useState("none")
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
   
    const renderHelper = (user) => {
    if(user){
        return (
            <div className="edit-Profile">
                <div className="edit-profile-avatar">
                    {UserAvatarRender(user)}
                 
                    <div className="inputWrapper">
                       <label>Select Avatar</label> 
                         <input className="fileInput" type="file" accept="image/*" />
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