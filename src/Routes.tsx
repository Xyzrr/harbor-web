import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Launch from "./Launch";
import GlobalStyles from "./global.styles";

const Routes: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/launch" component={Launch} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
