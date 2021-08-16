import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import {getUser} from '../functions/Api';
import {getUserData,getToken} from '../actions';
import {UserAvatarRender} from '../functions/checkPhoto';
import {VscNewFile} from "react-icons/vsc";
import {FiLogOut} from 'react-icons/fi'
import '../assets/styles/nav.scss'
import SearchBar from './SearchBar';


 const NavBar = (props) => {
    if(props.token && !props.user) {
        getUser(props.token).then(user =>{
            props.getUserData(user.data)
        }).catch(e=>{
            console.log(e.response)
        })
    }

    const Logout = () => {
        props.getToken(null)
        props.getUserData(null)
        if(localStorage.getItem('token')) {
            localStorage.removeItem('token') 
        }
    }

    const renderHellper = (user) => {
        if (user){
            return (
                 <div className="user-box">
                    <Link className="addblog-link" title="new blog" to="/addblog"><VscNewFile /></Link>
                    <Link className="profile-link" to="/profile">
                       {UserAvatarRender(user)}
                    </Link>
                    <button title="Log out" onClick={Logout}>
                        <FiLogOut />
                    </button>
                </div>
            )
        }else {
            return(
                <button onClick={props.authUser}
                className="btn green-btn">
                Sign in
                </button>
            )
        }
    }


   
    
    return (
        <div className="navbar">
            <nav>
            <Link to="/"><h1>ReadThm</h1></Link> 
            <div className="right-position">
            <SearchBar />
            {renderHellper(props.user)}
            </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser
  });

const mapDispatchToProps = dispatch => ({
    getUserData: user => {
      dispatch(getUserData(user));
    },
    getToken: token => {
        dispatch(getToken(token));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);