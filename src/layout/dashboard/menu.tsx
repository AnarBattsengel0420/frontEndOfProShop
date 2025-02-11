import { MenuDataItem } from "@ant-design/pro-layout";
import { BarChartSquare02, UserCircle, Folder } from "untitledui-js-base";

import { Phone } from "untitledui-js-base";

const menuData: MenuDataItem[] = [
  {
    path: "/dashboard/dashboard",
    name: "Талбайн Бүртгэл",
    icon: <BarChartSquare02 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/lavlah",
    name: "Лавлах Мэдээлэл",
    icon: <Phone size="28" />,
    children: [],
  },
  {
    path: "/dashboard/tailan",
    name: "Тайлан",
    icon: <Folder size="28" />,
    children: [],
  },
];

export default menuData;
