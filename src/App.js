import { HashRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import CreateUser from './pages/CreateUser/CreateUser.js';


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path="/login-react/" component={Login} />
          <Route path="/login-react/home" component={Home} />
          <Route path="/login-react/create-user" component={CreateUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
