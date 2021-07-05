import LoginComponent from './components/auth/LoginComponent';
import {getAllblogs} from './functions/Api'

function App() {
  getAllblogs()
  return (
    <div className="App">
      <LoginComponent />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
