import instance from "@/services/axios";
import { useEffect, useState } from "react";

const useDFetch = (url: any) => {
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res: any = await instance.get(url);
        const data = res.data.data;
        if (Array.isArray(data)) {
          setData(
            data.map((item: any) => {
              item.key = item._id;
              return item;
            })
          );
        } else {
          setData(data);
        }
      } catch (error: any) {
        console.log(error?.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, isError };
};

export default useDFetch;
