import Axios from 'axios'

const baseUrl = "http://localhost:3000"

export const getAllblogs = () => {
    return Axios.get(`${baseUrl}/blogs`)
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