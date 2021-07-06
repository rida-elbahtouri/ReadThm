import Axios from 'axios'

const baseUrl = "http://localhost:3000"

export const getAllblogs = () => {
    Axios.get(`${baseUrl}/blogs`).then(res => {
        console.log(res)
    })
}

export const getUser = (token) => {
    return Axios.get(`${baseUrl}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      }
    )
}

export const login = ({email,password}) => {
    return Axios.post(`${baseUrl}/users/login`, {
        email:email,
        password:password
    })
}