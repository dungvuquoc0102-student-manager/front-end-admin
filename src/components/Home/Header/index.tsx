import { Avatar, Button, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../../Theme";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <Button
      shape="circle"
      size={"large"}
      onClick={toggleDarkMode}
      className={styles.darkModeButton}
    >
      {darkMode ? <SunOutlined /> : <MoonOutlined />}
    </Button>
  );
};

const Header = () => {
  const logoUrl = "/logo/student-manager-logo.png";
  const avatarUrl = "https://placehold.co/10x10";

  return (
    <header className={styles.wrapper}>
      <Link to="/admin" className={styles.logo}>
        <Image preview={false} width={70} src={logoUrl}></Image>
      </Link>

      <Typography.Title className={styles.title}>
        Student Manager Admin
      </Typography.Title>

      <div className={styles.function}>
        <DarkModeButton />
        <Avatar src={avatarUrl} size={50} />
      </div>
    </header>
  );
};

export default Header;
