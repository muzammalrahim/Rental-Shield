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

// var language = localStorage.getItem('selected_language');
if ( localStorage.getItem('selected_language') == 'en' ) {
  
  if ( !(window.location.href.indexOf("/en") > -1) ) {
    window.history.pushState('en', 'en', window.location.href+'/en');
  } 
  
}
else {
  if ( !(window.location.href.indexOf("/ar") > -1) ) {
    window.history.pushState('ar', 'ar', window.location.href+'/ar');
  }
}

if ( (window.location.href.indexOf("//en") > -1) ) {
  window.history.pushState('en', 'en', '/en');
} 
else if ( (window.location.href.indexOf("//ar") > -1) ) {
  window.history.pushState('ar', 'ar', '/ar');
} 


//Routing
function App() {
  return (
    <div className="App">
      
      <section className="route-section">
        <Router>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/en" component={Home}/>
            <Route exact path="/ar" component={Home}/>
            

            <Route exact path="/landlord" component={LandLord}/>
            <Route exact path="/landlord/en" component={LandLord}/>
            <Route exact path="/landlord/ar" component={LandLord}/>

            <Route exact path="/tanents" component={Tanents}/>
            <Route exact path="/tanents/en" component={Tanents}/>
            <Route exact path="/tanents/ar" component={Tanents}/>


            <Route exact path="/about" component={About}/>
            <Route exact path="/about/en" component={About}/>
            <Route exact path="/about/ar" component={About}/>

            <Route exact path="/faq" component={Faq}/>
            <Route exact path="/faq/en" component={Faq}/>
            <Route exact path="/faq/ar" component={Faq}/>

            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/blog/en" component={Blog}/>
            <Route exact path="/blog/ar" component={Blog}/>

            <Route exact path="/blogpost" component={BlogPost}/>
            <Route exact path="/blogpost/en" component={BlogPost}/>
            <Route exact path="/blogpost/ar" component={BlogPost}/>

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
