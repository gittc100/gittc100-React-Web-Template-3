import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import FilesPage from "../pages/FilesPage";
import DocumentsPage from "../pages/DocumentsPage";
import AnalyticsPage from "../pages/AnalyticsPage";

const PageController = (props) => {
  return (
    <div class="flex-grow p-6 overflow-auto bg-gray-200 dark:bg-gray-800">
      <Switch>
        <Route exact path="/" render={() => <HomePage {...props} />} />
		<Route
          exact
          path="/files"
          render={() => <FilesPage {...props} />}
        />
		 <Route
          exact
          path="/documents"
          render={() => <DocumentsPage {...props} />}
        />
		 <Route
          exact
          path="/analytics"
          render={() => <AnalyticsPage {...props} />}
        />
        <Route
          exact
          path="/settings"
          render={() => <SettingsPage {...props} />}
        />
        <Route
          exact
          path="/account"
          render={() => <AccountPage {...props} />}
        />
      </Switch>
    </div>
  );
};

export default PageController;
