import { LoadingOutlined } from "@ant-design/icons";
import styles from "./DFetchingLoading.module.scss";

const DFetchingLoading = () => {
  return (
    <div className={styles.wrapper}>
      <LoadingOutlined className={styles.loader} />
    </div>
  );
};

export default DFetchingLoading;
