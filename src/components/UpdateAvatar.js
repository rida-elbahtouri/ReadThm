import { useState } from 'react';
import {UserAvatarRender,isPhotoValid} from '../functions/checkPhoto';
import {AddAvatarToUser} from '../functions/Api';
const UpdateAvatar = (props) => {

    const {user} = props;
    const [showAvatar , setShowAvatar] = useState(null)
    const [currentAvatar ,setCurrentAvatar] = useState(null)
   
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
    return (
        <div className="edit-profile-avatar">
                    
        {avatarDisplayed(user)}
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
