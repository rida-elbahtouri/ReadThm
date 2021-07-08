import {signup} from '../../functions/Api'
import { useState } from 'react'
import { connect } from 'react-redux';
import { getToken } from '../../actions' 
import '../../assets/styles/auth.scss'


const SignUpComponent = (props) => {

    const [email,setEmail] = useState("")
    const [fullname,setFullname] = useState("")
    const [password,setPassword] = useState("")
    const [passwordconfirmation,setPasswordconfirmation] = useState("")

    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const fullnameChange = (e) => {
        setFullname(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const passwordconfiChange = (e) => {
        setPasswordconfirmation(e.target.value)
    }

    const handleSubmit = (e) => {
        const getUserToken = props.getToken
        e.preventDefault();
       
       
        signup({fullname , email, password}).then(res => {
             props.authUser()
             getUserToken(res.data.token)
        }).catch(err=>{
            console.log(err.response.data.message)
        })

    }
    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input onChange={fullnameChange} type="text" placeholder="Full Name" required />
                <label>Email</label>
                <input onChange={emailChange} type="email" placeholder="email" required />
                <label>Password</label>
                <input onChange={passwordChange} type="password" placeholder="password" required />
                <label>Confirm Password</label>
                <input onChange={passwordconfiChange} type="password" placeholder="password confirmation" required />
                <input type="submit" className="green-btn btn" value="Sign up" />

                <p className="sub-text fs-5">Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
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
  
  
export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent);