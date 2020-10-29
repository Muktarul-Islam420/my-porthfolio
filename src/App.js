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

import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Blog from './components/Blog/Blog';
import CV from './components/CV/CV';


function App() {
  return (
  <div>
    <Header></Header>
    <About></About>
    <Experience></Experience>
    
  </div>
    
    //   <Router>
    //     <Switch>
    //       <Route path="/header">
    //         <Header/>
    //       </Route>
    //       <Route path="/contact">
    //         <About />
    //       </Route>
    //       <Route path="/project">
    //         <Project/>
    //       </Route>
    //       <Route path="/blog">
    //         <Blog/>
    //       </Route>
    //       <Route path="/cv">
    //         <CV/>
    //       </Route>
    //       <Route path="/">
    //         <Header/>
    //       </Route>
    //     </Switch>
    // </Router>
  
  );
}

export default App;
