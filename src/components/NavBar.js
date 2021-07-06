import { connect } from 'react-redux'; 
import { Link} from 'react-router-dom';
import {getUser} from '../functions/Api';
import {getUserData} from '../actions';

import '../assets/styles/nav.scss'
 const NavBar = (props) => {
    console.log(props)

    if(props.token && !props.user) {
        getUser(props.token).then(user =>{
            props.getUserData(user.data)
        }).catch(e=>{
            console.log(e)
        })
    }


    const renderHellper = (user) => {
        if (user){
            return (
                <div className="right-position user-box">
                    <Link to="/profile">
                        <img src={`http://localhost:3000/users/${user.id}/avatar`} />
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
            <h1>Medium</h1>
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