import { connect } from 'react-redux'; 
import { useState } from 'react';
import UpdateAvatar from './UpdateAvatar'
import '../assets/styles/edituser.scss'
const EditUser = (props) => {
    const {user} = props;

    const [changePassFormClass,setChangePassFormClass] = useState("none")
    const [btnMsg ,setBtnMsg] = useState("I want to change my password")


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


   const ShowHidePassChn = ()=>{
    if(changePassFormClass === "d-block"){
        setBtnMsg("I want to change my password")
        setChangePassFormClass("none")
    }else {
        setBtnMsg("Keep my password")
        setChangePassFormClass("d-block")
    }

    
    setChangePassFormClass(changePassFormClass === "d-block"? "none":"d-block")
    }
    const renderHelper = (user) => {
    if(user){
        return (
            <div className="edit-Profile">
                <UpdateAvatar user={user} token={props.token} />
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
                   
                    <button onClick={ShowHidePassChn} className="text-green" type="button">{btnMsg}</button>
                   
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