import { MenuDataItem } from "@ant-design/pro-layout";
import {
  BarChartSquare02,
  BookmarkAdd,
  Building02,
  Calendar,
  Certificate02,
  Phone,
  Settings01,
  Tablet02,
  Users01,
} from "untitledui-js-base";

const menuData: MenuDataItem[] = [
  {
    path: "/dashboard/dashboard",
    name: "Хянах самбар",
    icon: <BarChartSquare02 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/users",
    name: "Хэрэглэгчдийн удирдлага",
    icon: <Users01 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/organizations",
    name: "Мэдээний байгууллагууд",
    icon: <Building02 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/news-requests",
    name: "Мэдээний хуудсын хүсэлтүүд",
    icon: <Calendar size="28" />,
    children: [],
  },
  {
    path: "/dashboard/blog-categories",
    name: "Блогын ангилал",
    icon: <Certificate02 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/blogs",
    name: "Блог",
    icon: <BookmarkAdd size="28" />,
    children: [],
  },
  {
    path: "/dashboard/contact-us",
    name: "Холбоо барих хүсэлтүүд",
    icon: <Phone size="28" />,
    children: [],
  },
  {
    path: "/dashboard/settings",
    name: "Тохиргоо",
    icon: <Settings01 size="28" />,
    children: [],
  },
];

export default menuData;
