import { connect } from 'react-redux'; 
import { Link} from 'react-router-dom';
import {getUser} from '../functions/Api';
import {getUserData} from '../actions';
import {UserAvatarRender} from '../functions/checkPhoto';
import {VscNewFile} from "react-icons/vsc";
import {BiSearch} from 'react-icons/bi';
import '../assets/styles/nav.scss'


 const NavBar = (props) => {
    if(props.token && !props.user) {
        getUser(props.token).then(user =>{
            props.getUserData(user.data)
        }).catch(e=>{
            console.log(e.response)
        })
    }


    const renderHellper = (user) => {
        if (user){
            return (
                 <div className="user-box">
                    <Link className="addblog-link" title="new blog" to="/addblog"><VscNewFile /></Link>
                    <Link className="profile-link" to="/profile">
                       {UserAvatarRender(user)}
                    </Link>
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
    const searchBar = () => {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button><BiSearch /></button>
            </div>
        )
    }
    
    return (
        <div className="navbar">
            <nav>
            <Link to="/"><h1>Medium</h1></Link> 
            <div className="right-position">
            {searchBar()}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);