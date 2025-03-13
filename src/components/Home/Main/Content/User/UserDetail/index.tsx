import DFetchingError from "@/components/Loading/Error";
import DFetchingLoading from "@/components/Loading/Loading";
import useDFetch from "@/hooks/useDFetch";
import styles from "./UserDetail.module.scss";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const { data: user, isLoading, isError } = useDFetch(`/users/${id}`);

  return (
    <>
      {isLoading ? (
        <DFetchingLoading />
      ) : isError ? (
        <DFetchingError />
      ) : (
        <div>
          <h2 className={styles.title}>User Detail</h2>
          <ul className={styles.list}>
            {Object.keys(user).map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.key}>{item}</span>
                <span className={styles.value}>
                  {Array.isArray(user[item]) && user[item].length === 0 ? (
                    <span style={{ color: "red" }}>No items in array</span>
                  ) : (
                    user[item]
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

export default UserDetail;
