import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";

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
    path: "*",
    component: Error,
    name: "Login Screen",
    protected: false,
  },
];

export default routes;
