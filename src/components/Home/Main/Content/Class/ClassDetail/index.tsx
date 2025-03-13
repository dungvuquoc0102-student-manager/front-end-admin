import DFetchingError from "@/components/Loading/Error";
import DFetchingLoading from "@/components/Loading/Loading";
import useDFetch from "@/hooks/useDFetch";
import styles from "./ClassDetail.module.scss";
import { useParams } from "react-router-dom";

const ClassDetail = () => {
  const { id } = useParams();

  const {
    data: classInstance,
    isLoading,
    isError,
  } = useDFetch(`/classes/${id}`);

  return (
    <>
      {isLoading ? (
        <DFetchingLoading />
      ) : isError ? (
        <DFetchingError />
      ) : (
        <div>
          <h2 className={styles.title}>Class Detail</h2>
          <ul className={styles.list}>
            {Object.keys(classInstance).map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.key}>{item}</span>
                <span className={styles.value}>
                  {Array.isArray(classInstance[item]) &&
                  classInstance[item].length === 0 ? (
                    <span style={{ color: "red" }}>No items in array</span>
                  ) : (
                    classInstance[item]
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ClassDetail;
