import React from "react";

//Global styles
import GlobalStyles from "./components/GlobalStyles";

//PAGES
import Home from "./pages/Home";

//components
import Nav from "./components/Nav";
import SearchResult from "./pages/SearchResult";
import Footer from "./components/Footer";

//router
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path={["/movie/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path={["/search/:string", "/search/:string/:id"]} exact>
          <SearchResult />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
