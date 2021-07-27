import { useState } from 'react';
import {BlogimageRender,isPhotoValid} from '../../functions/checkPhoto';
import {AddPhotoToBlog} from '../../functions/Api';
import {showError,showSuccess} from '../../functions/helpers';


const UpdateBlogPhoto = (props) => {

    const [showPhoto , setShowPhoto] = useState(null)
    const [currentPhoto ,setCurrentPhoto] = useState(null)
    const [photoError ,setphotoError] = useState("")
    const [successmsg ,setSuccessmsg] = useState("")

    const {blog,token} = props
    
    const photoDisplayed = (blog) => {
        if(currentPhoto){
            return <img src={URL.createObjectURL(showPhoto)} alt="photo" />
        }else {
            return BlogimageRender(blog)
        }
    }


    const HandlephotoUpload = (e) => {
        setphotoError("")
        setSuccessmsg("")
        if(isPhotoValid(e.target.files[0])){
           const photo = e.target.files[0]
           setShowPhoto(photo)
         const myphoto = new FormData();
         myphoto.append(
             "photo",
             photo,
             photo.name
         );
         AddPhotoToBlog(myphoto,blog.id,token).then(()=> {
             setCurrentPhoto(true)
             setSuccessmsg("updated photo successfully")
         }).catch(err=>{
            setphotoError(err.response.data.message)
         })
 
        }else{
            setphotoError("Image Size is too big try with a file smaller than 1 mb!")
        }
 
     }
    return (
        <div className="edit-blog-photo">
                    
        {photoDisplayed(blog)}
         {showError(photoError)}
         {showSuccess(successmsg)}
            <div className="inputWrapper">
               <label>Select photo</label> 
                 <input 
                 onChange={e => HandlephotoUpload(e)}
                 className="fileInput" type="file" accept="image/*" />
            </div>

        </div>
    )
}

export default UpdateBlogPhoto