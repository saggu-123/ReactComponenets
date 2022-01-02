
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Review from './components/pages/Review';

import Drop1 from "./components/pages/Drop1";
import Drop2 from "./components/pages/Drop2";
import Drop3 from "./components/pages/Drop3";


function App() {
  return (
    <>
    <Router>
       <Navbar/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path="/Review" component={Review}/>
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Contact' component={Contact} />
    
        <Route path='/Drop1' component={Drop1} />
        <Route path='/Drop2' component={Drop2} />
        <Route path='/Drop3' component={Drop3} />

    </Switch>
    </Router>
    <Footer></Footer>
     </>
  );
}

export default App;
