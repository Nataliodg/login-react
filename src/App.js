import { HashRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import CreateUser from './pages/CreateUser/CreateUser.js';


function App() {
  return (
    <div className="App">
        <Router basename="/login-react">
        <Switch>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
