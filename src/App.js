import React from 'react';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './Component/Home.js';
import About from './Component/About.js';
import AddUser from './Component/AddUser';
import { NavLink } from 'react-router-dom';
import './App.css';
import './Component/Home.css';
import { ThemeContext } from './context/ThemeContext'; 
import { ThemeProvider } from './context/ThemeContext';  // Import ThemeProvider
import UserList from './Component/UserList';
import ThemeToggle from './Component/ThemeToggle';

const NavBar = () => (
  <nav style={navBarStyle}>
    <h1>My Navagation Bar</h1>
  </nav>
);
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Example of a Theme-Toggle</h1>
      <ThemeToggle />  {/* Add the ThemeToggle button here */}
    <ThemeProvider>
    <BrowserRouter>
    
      <nav className="navbar">
        
        <NavLink to="/"className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/"className="nav-link"activeClassName="active">AddUser</NavLink>
        <NavLink to="/"className="navlink"activeClassName="active">ThemeContext</NavLink>
      </nav>
    
      <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/AddUser"element={<AddUser/>} />
        <Route path="/" element={<Home />} />
        <Route path="/"element={<ThemeContext/>} />
        {/* Define the route for UserList */}
        <Route path="./Component/UserList.js" element={<UserList />} />
        
      
      </Routes>
    
    </BrowserRouter>
    </ThemeProvider>
    </div>

  );
}
const navBarStyle = {
  backgroundColor: '#333',
  padding: '20px',
  color: 'white',
  textAlign: 'center'
};
export default App;
