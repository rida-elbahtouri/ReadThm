import LoginComponent from './components/auth/LoginComponent';
import {getAllblogs} from './functions/Api'
import Home from './components/home'
function App() {
  getAllblogs()
  return (
    <div className="App">
      <LoginComponent />
      <Home />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
