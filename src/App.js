import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Blog from './components/Blog/Blog';
import CV from './components/CV/CV';
import Navbar from './components/Navbar/Navbar';


function App() {


  return (
 
    <>
   
    <Navbar></Navbar>
 
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/contact">
            <About />
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/cv">
            <CV/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
   
    </>
  );
}

export default App;
