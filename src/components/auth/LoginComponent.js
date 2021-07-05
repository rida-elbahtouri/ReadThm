import {login} from '../../functions/Api'
import { useState } from 'react'
import { connect } from 'react-redux';
import { getToken } from '../../actions' 



const LoginComponent = (props) => {

    console.log(props)
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
            console.log(res.data.token)
            getUserToken(res.data.token)
        }).catch(err=>{
            console.log(err)
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

const mapStateToProps = state => ({
    token: state.Token,
  });
  
const mapDispatchToProps = dispatch => ({
    getToken: token => {
      dispatch(getToken(token));
    },
});
  
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);