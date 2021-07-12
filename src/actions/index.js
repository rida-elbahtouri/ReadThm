export const getToken = token => ({
    type: "GETTOKEN",
    payload:token
})

export const getUserData = user => ({
    type: "GETUSER",
    payload:user
})

export const getAllBlogs = blogs => ({
    type: "GETBLOGS",
    payload:blogs
})