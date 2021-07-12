import { Switch ,Route} from 'react-router-dom';
import { useState } from 'react';

import AuthUserCompoenent from './components/auth/AuthUser';
import Home from './components/home';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
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
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
