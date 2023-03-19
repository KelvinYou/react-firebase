import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import TodoDetails from "../pages/TodoDetails";
import FCM from "../pages/FCM";

import * as ROUTES from "./../constants/routes";
interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: ROUTES.LOGIN_PATH,
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: ROUTES.MESSAGING_PATH,
    component: FCM,
    name: "Firebase Cloud Messaging",
    protected: true,
  },
  {
    path: ROUTES.PROFILE_PATH,
    component: Profile,
    name: "Login Screen",
    protected: true,
  },
  {
    path: ROUTES.TODO_DETAILS_PATH,
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
