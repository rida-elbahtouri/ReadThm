import {login} from '../../functions/Api'
import { useState } from 'react'
import { connect } from 'react-redux';
import { getToken } from '../../actions' 
import '../../assets/styles/auth.scss'


const LoginComponent = (props) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   

    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        const getUserToken = props.getToken
        e.preventDefault();
        login({email, password}).then(res => {
            props.authUser()
            getUserToken(res.data.token)
        }).catch(err=>{
            console.log(err.response.data.message)
        })
    }
    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input onChange={emailChange} type="email" placeholder="email" required />
                <label>Password</label>
                <input onChange={passwordChange} type="password" placeholder="password" required />
                <input type="submit" className="green-btn btn" value="Sign in" />

                <p className="sub-text fs-5">Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
            </form>
        </div>
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