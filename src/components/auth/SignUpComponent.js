import {signup ,getUser} from '../../functions/Api'
import {showError} from '../../functions/helpers'
import { useState } from 'react'
import { connect } from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai';
import { getToken , getUserData } from '../../actions' 
import '../../assets/styles/auth.scss'
import { useHistory } from 'react-router';

const SignUpComponent = (props) => {

    const [email,setEmail] = useState("")
    const [fullname,setFullname] = useState("")
    const [password,setPassword] = useState("")
    const [passwordconfirmation,setPasswordconfirmation] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [emailError , setEmailError] = useState("")

    const history = useHistory()
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
    
    const validatePassword = () => {
        setPasswordError("")
        if(password.length < 6){
            setPasswordError("password too short")
            return false;
        }else if(password !== passwordconfirmation) {
            setPasswordError("passwords dosn't match")
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const getUserToken = props.getToken
        if(validatePassword()){
             signup({fullname , email, password}).then(res => {
              props.authUser()
              getUserToken(res.data.token)
              localStorage.setItem("token", res.data.token)
             }).catch(err=>{
             if(err.response.data.message.includes("duplicate key error")){
                setEmailError("email already exist!! you may want to sign in.")
             }
             })
        }
    }
    if(props.token){
        getUser(props.token).then(user => {
            props.getUserData(user.data)
            history.push('/profile')
        })
    }
    return (
            <form onSubmit={handleSubmit}>
                <button onClick={()=>{props.authUser()}} className="close-btn"><AiOutlineClose /></button>
                <h1 className="text-green">Sign Up</h1>
                <label>Full Name</label>
                <input onChange={fullnameChange} type="text" placeholder="Full Name" required />
               {showError(emailError)}
                <label>Email</label>
                <input onChange={emailChange} type="email" placeholder="email" required />
                {showError(passwordError)}
                <label>Password</label>
                <input onChange={passwordChange} type="password" placeholder="password" required />
                <label>Confirm Password</label>
                <input onChange={passwordconfiChange} type="password" placeholder="password confirmation" required />
                <input type="submit" className="green-btn btn" value="Sign up" />
                <p>Already have an account <span onClick={()=>{props.SwitchForm('login')}} className="text-green clickable">sign in</span></p>
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
    getUserData: user => {
        dispatch(getUserData(user));
    },
});
  
  
export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent);