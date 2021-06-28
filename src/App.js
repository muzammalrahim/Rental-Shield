import './App.css';
import "tailwindcss/tailwind.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Import Component
import Home from '../src/pages/Home';




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
                  path="/"
                  component={Home}
              /> 
              {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </Router>
        
      </section>
    </div>
  );
}

export default App;
