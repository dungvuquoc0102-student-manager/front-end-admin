import { Menu } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./Sidebar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { sendEvent } from "@/helpers/events";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  let path = pathname.split("/")[2] || "dashboard";
  const navigate = useNavigate();

  return (
    <aside className={styles.wrapper}>
      <Menu
        style={{ padding: 10 }}
        onClick={(item) => {
          navigate(`/admin/${item.key}`);
          sendEvent("sidebar:change-path", { path: item.key });
        }}
        items={[
          {
            key: "dashboard",
            icon: <AppstoreOutlined />,
            label: "Dashboard",
          },
          {
            key: "classes",
            icon: <HomeOutlined />,
            label: "Classes",
          },
          {
            key: "users",
            icon: <UserOutlined />,
            label: "Users",
          },
        ]}
        defaultSelectedKeys={[path]}
        className={styles.menu}
      ></Menu>
    </aside>
  );
};

export default Sidebar;
