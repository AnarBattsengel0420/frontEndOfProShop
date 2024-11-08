import { MenuDataItem } from "@ant-design/pro-layout";
import {
  BarChartSquare02,
  Building02,
  Settings01,
  Users01,
} from "untitledui-js-base";

const menuData: MenuDataItem[] = [
  {
    path: "/dashboard/dashboard",
    name: "Dashboard",
    icon: <BarChartSquare02 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/users",
    name: "Users",
    icon: <Users01 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: <Settings01 size="28" />,
    children: [],
  },
];

export default menuData;
