import { Switch, Router, Route} from "react-router-dom";
import './App.css';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import CreateUser from './pages/CreateUser/CreateUser.js';


function App() {
  return (
    <div className="App">
      <Router basename="/login-react">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/create-user" component={CreateUser} />
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
