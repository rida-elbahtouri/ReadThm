import { connect } from 'react-redux'; 
import { useState } from 'react';
import UpdateAvatar from './UpdateAvatar';
import { getToken } from '../../actions' 
import {EditUser as UpdatetheUser} from '../../functions/Api';
import {showError,showSuccess} from '../../functions/helpers'
import '../../assets/styles/edituser.scss'

const EditUser = (props) => {
    const {user} = props;

    const [wantToChangePass,setWantToChangePass] = useState(false)
    const [btnMsg ,setBtnMsg] = useState("I want to change my password")

    const [fullname ,setFullname] = useState("")
    const [email ,setEmail] = useState("")
    const [passwordError ,setPasswordError] = useState("")
    const [password ,setPassword] = useState("")
    const [newPassword ,setNewPassword] = useState("")
    const [passwordConfirm ,setPasswordConfirm] = useState("")
    const [passwordConfirmError ,setPasswordConfirmError] = useState("")
    const [successMsg,setSuccessMsg] = useState("")
    
   const ChangePassword = () => {
       if(wantToChangePass){
             return (
           <div>
               {showError(passwordError)}
                <label>Old Password</label>
                    <input
                    type="password" 
                    placeholder="Enter your old password" 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required />
                      <label>New Password</label>
                    <input
                    type="password" 
                    placeholder="Enter your new password" 
                    onChange={(e)=>{setNewPassword(e.target.value)}}
                    required />
                    {showError(passwordConfirmError)}
                      <label>Confirm Password</label>
                    <input
                    type="password" 
                    placeholder="Confirm your new password" 
                    onChange={(e)=>{setPasswordConfirm(e.target.value)}}
                    required />
           </div>
       )
       }
     
   }
   const ShowHidePassChn = ()=>{
    if(wantToChangePass === true){
        setBtnMsg("I want to change my password")
        setWantToChangePass(false)
    }else {
        setBtnMsg("Keep my password")
        setWantToChangePass(true)
    }
    }


    const submitForm = (e) => {
        e.preventDefault();
        setPasswordConfirmError("")
        setPasswordError("")
        setSuccessMsg("")
        const data =  {}
        if(passwordConfirm !== newPassword){
            setPasswordConfirmError("passwords dosn't match")
        }else{
            console.log(passwordConfirmError)
            if(wantToChangePass){
                data.fullname = fullname
                data.email = email;
                data.password = password;
                data.new_password = newPassword;
            }else {
                data.fullname = fullname
                data.email = email;
            }
            setPasswordError("")
            UpdatetheUser(data, props.token).then((res) =>{
                getToken(res.data.token)
                setSuccessMsg("Profile updated successfully :)")
            } ).catch(e=>{
                setPasswordError(e.response.data.message)
            })
        }
       
    }


    const renderHelper = (user) => {
    if(user){
        return (
            <div className="edit-Profile">
                <UpdateAvatar user={user} token={props.token} />
                <form onSubmit={submitForm} className="edituser-form">
                {showSuccess(successMsg)}
                    <label>Full Name</label>
                    <input
                    type="text" 
                    defaultValue={user.fullname}
                    placeholder="Enter your full name" 
                    onChange={(e)=>{setFullname(e.target.value)}}
                    required />

                <label>Email</label>
                    <input
                    type="email" 
                    defaultValue={user.email}
                    placeholder="Enter your email" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required />
                    {ChangePassword()}
                    <button onClick={ShowHidePassChn} className="text-green bg-black btn" type="button">{btnMsg}</button>
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

  const mapDispatchToProps = dispatch => ({
    getToken: token => {
      dispatch(getToken(token));
    },
});
  export default connect(mapStateToProps, mapDispatchToProps)(EditUser);