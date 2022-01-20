import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import CreateUser from './pages/CreateUser/CreateUser.js';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/login-react/" element={<Login />} />
          <Route path="/login-react/home" element={<Home />} />
          <Route path="/login-react/create-user" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
