import AboutUs from './pages/AboutUs'
// import globalStyled
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import {Switch, Route} from 'react-router-dom'
import ContactUs from './components/ContactUs';
import OurWork from './components/OurWork';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <AboutUs/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
        <Route path="/work">
          <OurWork/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
