import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage, Aboutpage, Blogpage } from './Pages/pages_loader';
import Navbar from './Components/Layout/Navigation/navbar';
import Footer from './Components/Layout/Footer/footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch> 
          <Route path="/" exact>
              <Homepage/>
            </Route>
        <Route path="/blog">
              <Blogpage/>
            </Route>
            <Route path="/about">
              <Aboutpage/>
            </Route>  
           
          </Switch>  
          <Footer/>  
      </div>
    </Router>
  )
}

export default App;
