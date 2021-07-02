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
              
          </Switch>
        </Router>
        
      </section>
    </div>
  );
}

export default App;
