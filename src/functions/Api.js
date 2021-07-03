import Axios from 'axios'

const baseUrl = "http://localhost:3000"

export const getAllblogs = () => {
    Axios.get(`${baseUrl}/blogs`).then(res => {
        console.log(res)
    })
}

