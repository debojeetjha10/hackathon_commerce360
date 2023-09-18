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
import CreateNewProduct1 from "../pages/product/createNewProduct";
import CreatePriceRules from "../pages/pricerules/createpricerules";
import AllPricings from "../AllPrincings";
import AllPolicies from "../AllPolicies";
import NavBar from "../NavBar";
import SummaryCreatePrice from "../SummaryCreatePrice";
import ViewPriceRule from "../ViewPriceRule";
import ViewAllProduct from "../pages/ViewAllProduct.jsx";
import CreateABundle from "../CreateABundle";
import CreateNewProduct from "../pages/CreateAProduct";
import ViewBundle from "../Viewbundle";

export const privateRoutes = [
  {
    path: "/home",
    element: <Home />,
    children: [],
  },
  {
    path: "/ViewBundle",
    element: <ViewBundle />,
    children: [],
  },
  {
    path: "/CreateNewProduct",
    element: <CreateNewProduct />,
    children: [],
  },
  {
    path: "/CreateABundle",
    element: <CreateABundle />,
    children: [],
  },
  {
    path: "/ViewAllProduct",
    element: <ViewAllProduct />,
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
    path: "/createproduct1",
    element: <CreateNewProduct1 />,
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
    path: "/ViewPriceRule",
    element: <ViewPriceRule />,
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
  {
    path: "/SummaryCreatePrice",
    element: <SummaryCreatePrice />,
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
