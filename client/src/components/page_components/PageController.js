import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainComponentsPage from "../pages/MainComponentsPage";
import SettingsPage from "../pages/SettingsPage";


const PageController = (props) => {
  return (
    <div class="flex-grow p-6 overflow-auto bg-gray-800">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage {...props} site_name={site_name} />}
        />
        <Route
          exact
          path="/main-components"
          render={() => <MainComponentsPage {...props} site_name={site_name} />}
        />
        <Route
          exact
          path="/settings"
          render={() => <SettingsPage {...props} site_name={site_name} />}
        />
      </Switch>
    </div>
  );
};

export default PageController;
