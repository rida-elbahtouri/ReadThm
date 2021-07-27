export const getToken = token => ({
    type: "GETTOKEN",
    payload:token
})

export const getUserData = user => ({
    type: "GETUSER",
    payload:user
})

export const SearchForBlogs = blogs => ({
    type: "GETSEARCHRESULT",
    payload:blogs
})