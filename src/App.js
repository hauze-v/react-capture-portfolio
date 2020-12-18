// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// GLobal Style
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  /* Use useLocation to grab the page object which has a specific key for each page */
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={AboutUs}></Route>
          <Route exact path="/work" component={OurWork}></Route>
          <Route exact path="/contact" component={ContactUs}></Route>
          <Route exact path="/work/:id" component={MovieDetail}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
