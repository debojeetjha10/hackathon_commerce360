import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils";

const PrivateRoute = () => {
  const auth = isLoggedIn();

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
