import {login} from '../../functions/Api'
import { useState } from 'react'
export default function LoginComponent() {


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   

    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login({email, password}).then(res => {
            console.log(res)
        }).catch(err=>{
            console.log(err.response.data.message)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={emailChange} type="email" placeholder="email" required />
                <input onChange={passwordChange} type="password" placeholder="password" required />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
