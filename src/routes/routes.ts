import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import TodoDetails from "../pages/TodoDetails";
import FCM from "../pages/FCM";

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
    path: "/messaging",
    component: FCM,
    name: "Firebase Cloud Messaging",
    protected: true,
  },
  {
    path: "/profile",
    component: Profile,
    name: "Login Screen",
    protected: true,
  },
  {
    path: "/todos/:id",
    component: TodoDetails,
    name: "Todo Details Screen",
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
