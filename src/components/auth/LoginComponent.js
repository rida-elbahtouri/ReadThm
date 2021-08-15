import {login} from '../../functions/Api'
import { useState } from 'react'
import { connect } from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai';
import { getToken } from '../../actions';
import {showError} from '../../functions/helpers';

import '../../assets/styles/auth.scss'


const LoginComponent = (props) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        const getUserToken = props.getToken
        setError("")
        e.preventDefault();
        login({email, password}).then(res => {
            props.authUser()
            getUserToken(res.data.token)
            localStorage.setItem("token", res.data.token)
        }).catch(err=>{
            setError(err)
        })
    }
    return (
            <form onSubmit={handleSubmit}>
                <button onClick={()=>{props.authUser()}} className="close-btn"><AiOutlineClose /></button>
                <h1 className="text-green">Login</h1>
                {showError(error)}
                <label>Email</label>
                <input onChange={emailChange} type="email" placeholder="email" required />
                <label>Password</label>
                <input onChange={passwordChange} type="password" placeholder="password" required />
                <input type="submit" className="green-btn btn" value="Sign in" />

                <p>You don't have an account <span onClick={()=>{props.SwitchForm('signup')}} className="text-green clickable">sign up</span></p>
            </form>
    )
}

const mapStateToProps = state => ({
    token: state.Token,
  });
  
const mapDispatchToProps = dispatch => ({
    getToken: token => {
      dispatch(getToken(token));
    },
});
  
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);