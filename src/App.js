import './App.css';
import "tailwindcss/tailwind.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Import Component
import Home from '../src/pages/Home';
import Tanents from '../src/pages/Tanents';
import LandLord from '../src/pages/LandLord';
import About from '../src/pages/About';
import Faq from '../src/pages/Faq';
import BlogPost from '../src/pages/BlogPost';


import Blog from '../src/pages/Blog';


// function HeaderComponent()
// {
//     const {t, i18n} = useTranslation('common');
//     return <div>
//     <h1>
//       {t('welcome.title', {framework:'React'})}
//     </h1>
//     <button onClick={() => i18n.changeLanguage('ar')}>ar</button>
//     <button onClick={() => i18n.changeLanguage('en')}>en</button>
// </div>
// }

import {
    useParams,
} from "react-router-dom";

/*function BlogPage() {
    let { id } = useParams();
    return( alert(id));

}*/

//Routing
function App() {

  return (
    <div className="App">
      {/* <HeaderComponent/> */}
      <section className="route-section">
        <Router>
          <Switch>
            
              <Route
              exact
                  path="/"
                  component={Home}
              >
                </Route> 
              
              <Route
              exact
                  path="/tanents"
                  component={Tanents}
              >
              </Route> 

              <Route
              exact
                  path="/landlord"
                  component={LandLord}
              >
              </Route> 

              <Route
              exact
                  path="/about"
                  component={About}
              >
              </Route> 

              <Route
              exact
                  path="/faq"
                  component={Faq}
              >
              </Route> 
              <Route
              exact
                  path="/blog"
                  component={Blog }
              >
              </Route> 

              <Route
              exact
                  path="/blogpost"
                  component={BlogPost}
              >
              </Route> 
              
          </Switch>
        </Router>
        
      </section>
    </div>
  );
}

export default App;
