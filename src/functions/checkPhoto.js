export const BlogimageRender=(blog)=> {
    const addDefaultSrc =(ev)=> {
        ev.target.src = 'https://via.placeholder.com/150?text=NoPicture'
    }
    return <img src={`http://localhost:3000/blogs/${blog.id}/photo`}
    onError={addDefaultSrc} />
   }
export const BlogReadImage=(blog)=> {
    const addDefaultSrc =(ev)=> {
        ev.target.className = 'none'
    }
    return <img src={`http://localhost:3000/blogs/${blog.id}/photo`}
    onError={addDefaultSrc} />
}
export const UserAvatarRender=(user)=> {
    const addDefaultSrc =(ev)=> {
        ev.target.src = 'https://via.placeholder.com/150?text=Avatar'
    }
    return <img src={`http://localhost:3000/users/${user.id}/avatar`}
    onError={addDefaultSrc} />
}
export const isPhotoValid = (photo) => {
    if(photo && photo.size > 1000000){
        return false;
    }else {
        return true;
    }
}