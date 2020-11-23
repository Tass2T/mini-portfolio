import AboutUs from './pages/AboutUs'
// import globalStyled
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import {Switch, Route, useLocation} from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail'

//animation when a component is unmounted
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      {/* exitbeforeenter is to avoid both animation to be done at the same time */}
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
