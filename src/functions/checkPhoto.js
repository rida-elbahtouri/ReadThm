import {baseUrl} from './Api';

export const BlogimageRender=(blog)=> {
    const addDefaultSrc =(ev)=> {
        ev.target.src = 'https://via.placeholder.com/150?text=NoPicture'
    }
    return <img src={`${baseUrl}/blogs/${blog.id}/photo`}
    onError={addDefaultSrc} />
   }
export const BlogReadImage=(blog)=> {
    const addDefaultSrc =(ev)=> {
        ev.target.className = 'none'
    }
    return <img src={`${baseUrl}/blogs/${blog.id}/photo`}
    onError={addDefaultSrc} />
}
export const UserAvatarRender=(user)=> {
    const addDefaultSrc =(ev)=> {
        ev.target.src = 'https://via.placeholder.com/150?text=Avatar'
    }
    return <img id="user-avatar" src={`${baseUrl}/users/${user.id}/avatar`}
    onError={addDefaultSrc} />
}
export const isPhotoValid = (photo) => {
    if(photo && photo.size > 1000000){
        return false;
    }else {
        return true;
    }
}