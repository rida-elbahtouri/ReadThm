export const getToken = token => ({
    type: "GETTOKEN",
    payload:token
})

export const getUserData = user => ({
    type: "GETUSER",
    payload:user
})