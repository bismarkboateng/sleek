import { BiHomeAlt, BiMessageRoundedDetail } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";


export const NavLinks = [
  {
    icon: <BiHomeAlt fontSize={20}/>,
    title: "Dashboard",
    path: "/dashboard",
    key: "dashboard",
  },
  {
    icon: <GrDocumentText fontSize={18} />,
    title: "Orders",
    path: "/orders",
    key: "orders",
  },
  {
    icon: <FiShoppingBag fontSize={20} />,
    title: "Products",
    path: "/products",
    key: "products"
  },
  {
    icon: <LuUserCircle2 fontSize={20} />,
    title: "Customers",
    path: "/customers",
    key: "customers"
  },
  {
    icon: <LuSettings fontSize={20} />,
    title: "Settings",
    path: "/settings",
    key: "settings",
  },
];