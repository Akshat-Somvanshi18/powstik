import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Listing from './components/Listing';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let a=[];
  return (
  <>
       <Router basename="/">
        <Navbar/>

        <Routes>
          <Route
            exact
            path="/"
            element={<Listing name={a} />}
          />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Cart" element={<Cart name={a}/>} />
        </Routes>
      </Router>
  </>
);
}

export default App;
