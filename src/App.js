import React, { Fragment } from "react";
import { Switch, Route } from "react-router";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ModelerPage from "./pages/ModelerPage";
import FrameworksPage from "./pages/FrameworksPage";

const App = () => (
  <Fragment>
    {/* render a navigation component */}
    <header>
      <Navigation />
    </header>

    {/* render routing logic of react-router-dom */}
    <main>
      <Switch>
        <Route path="/" exact children={<HomePage />} />
        <Route path="/modeler" children={<ModelerPage />} />
        <Route path="/frameworks" children={<FrameworksPage />} />
      </Switch>
    </main>
  </Fragment>
);

export default App;
