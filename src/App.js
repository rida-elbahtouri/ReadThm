import { Switch ,Route} from 'react-router-dom';
import { useState } from 'react';


import LoginComponent from './components/auth/LoginComponent';

import Home from './components/home'
import NavBar from './components/NavBar';
function App() {
  const [isActive, setIsActive] = useState(false)
  const authUser = () => {
    setIsActive(!isActive)
   }


  const wantToAuth = () => {
    if(isActive){
      return <LoginComponent authUser={authUser} />
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
