import { Link , Switch ,Route} from 'react-router-dom';
import { useState } from 'react';


import LoginComponent from './components/auth/LoginComponent';
import {getAllblogs} from './functions/Api'
import Home from './components/home'
import NavBar from './components/NavBar';
function App() {
  getAllblogs()
  const [isActive, setIsActive] = useState(false)
  const authUser = () => {
    setIsActive(!isActive)
   }


  const wantToAuth = () => {
    if(isActive){
      return <LoginComponent />
    }
  }
  return (
    <div className="App">
      <NavBar authUser={authUser} />
      <div className="content">
       {wantToAuth()}
      <Switch>
        <Route to="/" component={Home} />

      </Switch>
      </div>
    </div>
  );
}

export default App;
