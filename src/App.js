import { Switch ,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from './actions';
import AuthUserCompoenent from './components/auth/AuthUser';
import Home from './components/home';
import UserProfile from './components/users/UserProfile';
import NavBar from './components/NavBar';
import AddingBlog from './components/blogs/AddingBlog';
import BlogShow from './components/blogs/BlogShow';
import EditUser from './components/users/EditUser'
import EditBlog from './components/blogs/EditBlog';
import ResultPage from './components/ResultPage';
import {CheckToken} from './functions/Api'


function App(props) {
  const [isActive, setIsActive] = useState(false)
  

 
  useEffect(() => {
    if(localStorage.getItem("token")){
      CheckToken(localStorage.getItem("token"))
      .then(()=>{
        props.getToken(localStorage.getItem("token"))
      })
      .catch(()=>{
        props.getToken(null)
        localStorage.removeItem('token')
      })
    }
  },[])
 
  const authUser = () => {
    setIsActive(!isActive)
   }


  const wantToAuth = () => {
    if(isActive){
      return <AuthUserCompoenent authUser={authUser} />
    }
  }
  return (
    <div className="App">
      <NavBar authUser={authUser} />
      <div className="content">
       {wantToAuth()}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/addblog" component={AddingBlog} />
        <Route path="/user/:id" component={UserProfile} />
        <Route path="/blog/:id" component={BlogShow} />
        <Route path="/search/:term" component={ResultPage} />
        <Route path="/edit/blog/:id" component={EditBlog} />
        <Route path="/edit/user" component={EditUser} />
      </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.Token,
});

const mapDispatchToProps = dispatch => ({
  getToken: token => {
    dispatch(getToken(token));
  },
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
