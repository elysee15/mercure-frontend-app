import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from "react";

const CreateProduct = React.lazy(() => import("./CreateProduct"));
const SignIn = React.lazy(() => import("./SignIn"));
const App = React.lazy(() => import("./App"));
const Login = React.lazy(() => import("./Login"));

export default function AppRoute() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/app"
            render={() => (
              <Suspense fallback="Chargement...">
                <App />
              </Suspense>
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <Suspense fallback="Chargement...">
                <SignIn />
              </Suspense>
            )}
          />
          <Route
            path="/create"
            render={() => (
              <Suspense fallback="Chargement...">
                <CreateProduct />
              </Suspense>
            )}
          />
          <Route
            path="/"
            render={() => (
              <Suspense fallback="Chargement...">
                <Login />
              </Suspense>
            )}
          />
          <Redirect
            path="/"
            to="/login"
            render={() => (
              <Suspense fallback="Chargement...">
                <Login />
              </Suspense>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}
