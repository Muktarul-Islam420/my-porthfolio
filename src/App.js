
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
import MyDescription from './components/MyDescription/MyDescription';
import Me from './components/Me/Me';
import Home2 from './components/Home2/Home2';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import myBg from './videos/bgVideo.mp4'

function App() {


  return (
 
    <>


    <video
    autoPlay
    loop
    muted
     style={{
       position: 'fixed',
       width: '100%',
      
       height: '805px',
       objectFit:"cover",
       zIndex:"-1"
     }}>

       <source src={myBg} type="video/mp4"/>
    </video>

     <NavBar></NavBar>
    
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
          <Route path="/home2">
            <Home2/>
          </Route>

          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/cv">
            <CV/>
          </Route>
          <Route exact path="/">
            <Home/>
            </Route>
            <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
    </Router> 
   
    </>
  );
}

export default App;
