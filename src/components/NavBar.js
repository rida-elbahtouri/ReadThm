import { connect } from 'react-redux'; 
import { Link} from 'react-router-dom';
import {getUser} from '../functions/Api';
import {getUserData} from '../actions';
import {UserAvatarRender} from '../functions/checkPhoto';


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
                <div className="right-position user-box">
                    <Link to="/profile">
                       {UserAvatarRender(user)}
                    </Link>
                </div>
            )
        }else {
            return(
                <button onClick={props.authUser}
                className="btn green-btn right-position">
                Sign in
                </button>
            )
        }
    }
    
    
    return (
        <div className="navbar">
            <nav>
            <Link to="/"><h1>Medium</h1></Link> 
            {renderHellper(props.user)}
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