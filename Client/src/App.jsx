import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import { privateRoutes, publicRoutes } from "./routes/routes";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    
    <Router>
      <NavBar/>
      <Fragment>
        <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              {privateRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </Fragment>
    </Router>
    </>
  );
}

export default App;
