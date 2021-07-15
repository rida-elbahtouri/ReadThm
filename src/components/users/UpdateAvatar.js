import { useState } from 'react';
import {UserAvatarRender,isPhotoValid} from '../../functions/checkPhoto';
import {AddAvatarToUser} from '../../functions/Api';
import {showError,showSuccess} from '../../functions/helpers';
const UpdateAvatar = (props) => {

    const {user} = props;
    const [showAvatar , setShowAvatar] = useState(null)
    const [currentAvatar ,setCurrentAvatar] = useState(null)
    const [avatarError ,setAvatarError] = useState("")
    const [successmsg ,setSuccessmsg] = useState("")
    const avatarDisplayed = (user) => {
        if(currentAvatar){
            return <img src={URL.createObjectURL(showAvatar)} alt="avatar" />
        }else {
            return UserAvatarRender(user)
        }
    }
    const HandleAvatarUpload = (e) => {
        setAvatarError("")
        setSuccessmsg("")
        if(isPhotoValid(e.target.files[0])){
           const avatar = e.target.files[0]
           setShowAvatar(avatar)
         const myavatar = new FormData();
         myavatar.append(
             "avatar",
             avatar,
             avatar.name
         );
         AddAvatarToUser(myavatar,props.token).then(()=> {
             setCurrentAvatar(true)
             setSuccessmsg("updated avatar successfully")
         }).catch(err=>{
            setAvatarError(err.response.data.message)
         })
 
        }else{
            setAvatarError("Image Size is too big try with a file smaller than 1 mb!")
        }
 
     }
    return (
        <div className="edit-profile-avatar">
                    
        {avatarDisplayed(user)}
         {showError(avatarError)}
         {showSuccess(successmsg)}
            <div className="inputWrapper">
               <label>Select Avatar</label> 
                 <input 
                 onChange={e => HandleAvatarUpload(e)}
                 className="fileInput" type="file" accept="image/*" />
            </div>

        </div>
    )
}

export default UpdateAvatar;
