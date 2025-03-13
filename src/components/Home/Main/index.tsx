import Content from "./Content";
import Sidebar from "./Sidebar";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Main;
