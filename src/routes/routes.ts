import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/profile",
    component: Profile,
    name: "Login Screen",
    protected: true,
  },
  {
    path: "*",
    component: Error,
    name: "Error Screen",
    protected: false,
  },
];

export default routes;
