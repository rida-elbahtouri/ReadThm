import { Switch ,Route} from 'react-router-dom';
import { useState } from 'react';

import AuthUserCompoenent from './components/auth/AuthUser';
import Home from './components/home';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import AddingBlog from './components/blogs/AddingBlog';
import BlogShow from './components/blogs/BlogShow';
function App() {
  const [isActive, setIsActive] = useState(false)
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
      </Switch>
      </div>
    </div>
  );
}

export default App;
