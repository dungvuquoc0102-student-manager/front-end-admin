import styles from "./Content.module.scss";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Content;
