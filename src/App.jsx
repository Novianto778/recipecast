import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import GlobalStyles from "src/assets/GlobalStyles";
import Homepage from "src/pages/Homepage";
import Categories from "src/pages/Categories";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/recipe/:id">
            <RecipeDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
