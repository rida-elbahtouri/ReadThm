import Axios from 'axios'

const baseUrl = "http://localhost:3000"

export const getAllblogs = () => {
    return Axios.get(`${baseUrl}/blogs`)
}

export const getTrendingblogs = () => {
    return Axios.get(`${baseUrl}/blogs/trending`)
}
export const getHotblogs = () => {
    return Axios.get(`${baseUrl}/blogs/hot`)
}
export const getPopulerblogs = () => {
    return Axios.get(`${baseUrl}/blogs/populer`)
}
export const searchForBlog = (term) => {
    return Axios.get(`${baseUrl}/blogs/search/${term}`)
}
export const getUser = (token) => {
    return Axios.get(`${baseUrl}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      }
    )
}
export const getUserById = (id) => {
    return Axios.get(`${baseUrl}/users/${id}`)
}

export const getBlogById = (id) => {
    return Axios.get(`${baseUrl}/blogs/${id}`)
}

export const login = ({email,password}) => {
    return Axios.post(`${baseUrl}/users/login`, {
        email:email,
        password:password
    })
}
export const getUserBlogs = (user_id) => {
    return Axios.get(`${baseUrl}/blogs/${user_id}/blogs`)
}

export const CreateBlog = (blog,token) => {
    return Axios.post(`${baseUrl}/blogs/`, {
        title:blog.title,
        content:blog.content
    },{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    })
}
export const UpdateBlog = (blog,token) => {
    return Axios.patch(`${baseUrl}/blogs/${blog.id}`, {
        title:blog.title,
        content:blog.content
    },{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    })
}
export const DeleteBlog = (blog_id,token) => {
    return Axios.delete(`${baseUrl}/blogs/${blog_id}`,{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    })
}
export const AddPhotoToBlog = (photo,blog_id,token) => {
    return  Axios.post(`${baseUrl}/blogs/${blog_id}/photo`, photo,{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    });
}
export const EditUser = (data,token) => {
    return  Axios.patch(`${baseUrl}/users/`, data,{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    });
}
export const AddAvatarToUser = (avatar,token) => {
    return  Axios.post(`${baseUrl}/users/me/avatar`, avatar,{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    });
}
export const signup = ({fullname,email,password}) => {
    return Axios.post(`${baseUrl}/users/`, {
        fullname:fullname,
        email:email,
        password:password
    })
}

export const deleteUser = (token) => {
    return Axios.delete(`${baseUrl}/users/`,{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    } )
}


export const getBlogComments = (blog_id) => {
    return Axios.get(`${baseUrl}/comments/${blog_id}`)
}


export const createComment = (content,blog_id,token) => {
    return Axios.post(`${baseUrl}/comments/`, {
        content:content,
        blog_id:blog_id
    },{
        headers: {
          'Authorization': `Bearer ${token}` 
        } 
    })
}