import './App.css';
import Header from "./Header";
import Home from './Home';
import Product from './Product';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login">
              <Login/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
            <Product/>
          </Route>

        </Routes>
      </Router>      
    </div>
  );
}

export default App;
