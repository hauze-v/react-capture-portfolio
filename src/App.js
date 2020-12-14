// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// GLobal Style
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs}></Route>
        <Route exact path="/work" component={OurWork}></Route>
        <Route exact path="/contact" component={ContactUs}></Route>
      </Switch>
    </div>
  );
}

export default App;
