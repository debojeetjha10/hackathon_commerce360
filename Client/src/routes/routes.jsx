import SignUp from "../SignUp";

import Login from "../Login";
import Home from "../pages/landing/index";
import MyCatalog from "../MyCatalogs";
import PriceAProduct from "../PriceAProduct";
import CreateMetric from "../CreateMetric";
import ChannelsAndAudience from "../ChannelsAndAudience";
import PriceDefault from "../PriceDefaults";
import TaxAndBilling from "../TaxAndBilling";
import FinanceAndRevenue from "../FinanceAndRevenue";
import CreateNewProduct from "../pages/product/createNewProduct";
import CreatePriceRules from "../pages/pricerules/createpricerules";
import AllPricings from "../AllPrincings";
import AllPolicies from "../AllPolicies";
import NavBar from "../NavBar";

export const privateRoutes = [
  {
    path: "/home",
    element: <Home />,
    children: [],
  },
  {
    path: "/AllPolicies",
    element: <AllPolicies />,
    children: [],
  },
  {
    path: "/AllPricings",
    element: <AllPricings />,
    children: [],
  },
  {
    path: "/createproduct",
    element: <CreateNewProduct />,
    children: [],
  },
  {
    path: "/createPriceRules",
    element: <CreatePriceRules />,
    children: [],
  },
  {
    path: "/MyCatalog",
    element: <MyCatalog />,
    children: [],
  },
  {
    path: "/PriceAProduct",
    element: <PriceAProduct />,
    children: [],
  },
  {
    path: "/CreateMetric",
    element: <CreateMetric />,
    children: [],
  },
  {
    path: "/ChannelsAndAudience",
    element: <ChannelsAndAudience />,
    children: [],
  },
  {
    path: "/PriceDefault",
    element: <PriceDefault />,
    children: [],
  },
  {
    path: "/TaxAndBilling",
    element: <TaxAndBilling />,
    children: [],
  },
  {
    path: "/FinanceAndRevenue",
    element: <FinanceAndRevenue />,
    children: [],
  },
];

export const publicRoutes = [
  {
    path: "/register",
    element: <SignUp />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/navbar",
    element: <NavBar />,
    children: [],
  },
  {
    path: "/footer",
    element: <Login />,
    children: [],
  }
];
