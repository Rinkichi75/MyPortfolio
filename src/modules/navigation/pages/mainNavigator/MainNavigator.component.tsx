import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "../../../../components";
import { About } from "../../../about";
import { Activities } from "../../../activities";
import { Contact } from "../../../contact";
import { Experience } from "../../../experiences";
import { Formation } from "../../../formation";
import { Skills } from "../../../skills";
import { PATHS } from "../../services";

export const MainNavigator: FunctionComponent = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={PATHS.ABOUT_PAGE.ROUTE}>
            <About />
          </Route>
          <Route exact path={PATHS.FORMATIONS_PAGE.ROUTE}>
            <Formation />
          </Route>
          <Route exact path={PATHS.SKILLS_PAGE.ROUTE}>
            <Skills />
          </Route>
          <Route exact path={PATHS.EXPERIENCES_PAGE.ROUTE}>
            <Experience />
          </Route>
          <Route exact path={PATHS.ACTIVITIES_PAGE.ROUTE}>
            <Activities />
          </Route>
          <Route exact path={PATHS.CONTACT_PAGE.ROUTE}>
            <Contact />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
