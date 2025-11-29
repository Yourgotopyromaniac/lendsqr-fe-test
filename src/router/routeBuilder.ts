import type { PathRouteProps } from "react-router-dom";
import { Login } from "../pages/login";
import { AppRoutes } from "./routes";

export interface RouteBuilderItem extends PathRouteProps {
  Layout?: React.FC<any>;
  Element: React.FC;
  props?: any;
}

export const RouteBuilder: RouteBuilderItem[] = [
  {
    Element: Login,
    path: AppRoutes.login,
  },
];
