import "./App.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import Component
import Home from "../src/pages/Home";
import LandLord from "../src/pages/LandLord";
import Tanents from "../src/pages/Tanents";        
import About from "../src/pages/About";
import Faq from "../src/pages/Faq";
import Blog from "../src/pages/Blog";                         
import BlogPost from "../src/pages/BlogPost";
import SearchResult from "./pages/SearchResult";
import Pricing from "./pages/pricing/Pricing";  
import Shop from '../src/pages/Shop';  
import Contact from "./pages/Contact"; 
import Investor from "../src/pages/Investor";
import Career from "./pages/careers/Career";


//Routing
function App() {
  return (
    <div className="App">

      <section className="route-section">
        <Router>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/landlord" component={LandLord}/>
            <Route exact path="/tanents" component={Tanents}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/faq" component={Faq}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/blogpost" component={BlogPost}/>
            <Route exact path="/serach" component={SearchResult}></Route>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/investor" component={Investor}></Route>  
            <Route exact path="/careers" component={Career}></Route>
  
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
