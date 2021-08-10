import "./App.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
//Translation
import { withTranslation } from "react-i18next";

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
// } else if (window.location.href.indexOf("/ar") > -1) {
//   window.history.pushState("ar", "ar", "/ar");
// }

//Routing
function App(props) {
  console.log("jk lang", window.location.pathname);
  // let langu = localStorage.getItem("selected_language");
  // let language = langu == 'en' ? '/en/land'
  return (
    <div className="App">
      <section className="route-section">
        <Router>
          {/* <Route exact path="/:lang" component={Home} />

<Route exact path="/" component={Home} /> */}
          <Switch>
            {/* {/ <Route path="/:lang" component={Home} /> } */}
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/:lang" component={Home} />

            {/* <Route exact path={`/${langu}/landlord`} component={LandLord} /> */}
            {/* <Route exact path="/ar/landlord" component={LandLord} /> */}
            {/* <Route
              exact
              path={`${langu == "en" ? "/en/landlord" : "/ar/landlord"}`}
              component={LandLord}
            /> */}

            {/* <Route exact path="/landlord" component={LandLord} /> */}
            <Route exact path="/:lang/landlord" component={LandLord} />

            {/* <Route exact path="/tanents" component={Tanents} /> */}
            <Route exact path="/:lang/tanents" component={Tanents} />

            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/:lang/about" component={About} />

            {/* <Route exact path="/faq" component={Faq} /> */}
            <Route exact path="/:lang/faq" component={Faq} />

            {/* <Route exact path="/blog/:lang" component={Blog} /> */}
            <Route exact path="/:lang/blog" component={Blog} />

            {/* <Route exact path="/blogpost/:lang" component={BlogPost} /> */}
            <Route exact path="/:lang/blogpost" component={BlogPost} />

            <Route exact path="/:lang/search" component={SearchResult}></Route>
            {/* <Route exact path="/pricing" component={Pricing}></Route> */}
            <Route exact path="/:lang/pricing" component={Pricing}></Route>
            <Route exact path="/:lang/shop" component={Shop}></Route>
            <Route exact path="/:lang/contact" component={Contact}></Route>
            <Route exact path="/:lang/investor" component={Investor}></Route>
            <Route exact path="/:lang/careers" component={Career}></Route>
            <Redirect exact from="/" to="/en" />
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
