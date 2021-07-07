export const BlogimageRender=(blog)=> {
       if(blog.photo){
           return `http://localhost:3000/blogs/${blog.id}/photo`
       } else {
        return "https://source.unsplash.com/random"
       }
   }

   export const UserAvatarRender=(user)=> {
    if(user.avatar){
        return `http://localhost:3000/users/${user.id}/avatar`
    } else {
     return "https://source.unsplash.com/random"
    }
}