import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import GlobalStyles from 'src/assets/GlobalStyles';
import Homepage from 'src/pages/Homepage';
import Categories from 'src/pages/Categories';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
