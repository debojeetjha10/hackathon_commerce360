import SignUp from "../SignUp";

import Login from "../Login";
import Home from "../Home";
import MyCatalog from "../MyCatalogs";
import PriceAProduct from "../PriceAProduct";
import CreateMetric from "../CreateMetric";
import ChannelsAndAudience from "../ChannelsAndAudience";
import PriceDefault from "../PriceDefaults";
import TaxAndBilling from "../TaxAndBilling";
import FinanceAndRevenue from "../FinanceAndRevenue";
import CreateNewProduct from "../pages/product/createNewProduct";
import CreatePriceRules from "../pages/pricerules/createpricerules";
export const privateRoutes = [
  {
    path: "/home",
    element: <Home />,
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
];
