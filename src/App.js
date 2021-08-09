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
import Shop from "../src/pages/Shop";
import Contact from "./pages/Contact";
import Investor from "../src/pages/Investor";
import Career from "./pages/careers/Career";

// if (localStorage.getItem("selected_language") == "en") {
//   if (!(window.location.href.indexOf("/en") > -1)) {
//     window.history.pushState("en", "en", window.location.href + "/en");
//   }
// } else {
//   if (!(window.location.href.indexOf("/ar") > -1)) {
//     window.history.pushState("ar", "ar", window.location.href + "/ar");
//   }
// }

// if (window.location.href.indexOf("//en") > -1) {
//   window.history.pushState("en", "en", "/en");
// } else if (window.location.href.indexOf("//ar") > -1) {
//   window.history.pushState("ar", "ar", "/ar");
// }

//Routing
function App() {
  return (
    <div className="App">
      <section className="route-section">
        <Router>
          {/* <Route exact path="/:lang" component={Home} />

<Route exact path="/" component={Home} /> */}
          <Switch>
            {/* <Route path="/:lang" component={Home} /> */}
            <Route exact path="/" component={Home} />

            <Route exact path="/landlord" component={LandLord} />
            <Route exact path="/landlord/:lang" component={LandLord} />

            <Route exact path="/tanents/:lang" component={Tanents} />
            <Route exact path="/tanents" component={Tanents} />

            <Route exact path="/about/:lang" component={About} />
            <Route exact path="/about" component={About} />

            <Route exact path="/faq/:lang" component={Faq} />
            <Route exact path="/faq" component={Faq} />

            <Route exact path="/blog/:lang" component={Blog} />
            <Route exact path="/blog" component={Blog} />

            <Route exact path="/blogpost/:lang" component={BlogPost} />
            <Route exact path="/blogpost" component={BlogPost} />

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
