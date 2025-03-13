import { DisconnectOutlined } from "@ant-design/icons";
import styles from "./DFetchingError.module.scss";

const DFetchingError = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <DisconnectOutlined className={styles.symbol} />
        <span>An error occurred while loading data!</span>
      </div>
    </div>
  );
};

export default DFetchingError;
