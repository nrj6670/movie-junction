import React from "react";

//Global styles
import GlobalStyles from "./components/GlobalStyles";

//PAGES
import Home from "./pages/Home";

//components
import Nav from "./components/Nav";

//router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
