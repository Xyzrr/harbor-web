import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Launch from "./Launch";
import GlobalStyles from "./global.styles";
import { FirebaseContextProvider } from "./contexts/FirebaseContext";
import { FirebaseUIContextProvider } from "./contexts/FirebaseUIContext";

const Routes: React.FC = () => {
  React.useEffect(() => {
    console.log("WHAT THE SHIT");
  }, []);
  return (
    <>
      <GlobalStyles />
      <FirebaseContextProvider>
        <FirebaseUIContextProvider>
          <Router>
            <Switch>
              <Route path="/launch" component={Launch} />
              <Route path="/" component={App} />
            </Switch>
          </Router>
        </FirebaseUIContextProvider>
      </FirebaseContextProvider>
    </>
  );
};

export default Routes;
