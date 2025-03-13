import DFetchingError from "@/components/Loading/Error";
import DFetchingLoading from "@/components/Loading/Loading";
import DTable from "@/components/Table/DTable";
import useDFetch from "@/hooks/useDFetch";

const Class = () => {
  const { data: classes, isLoading, isError } = useDFetch("/classes");
  return (
    <>
      {isLoading ? (
        <DFetchingLoading />
      ) : isError ? (
        <DFetchingError />
      ) : (
        <DTable
          tableName="Classes"
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "class-name",
            },
          ]}
          data={classes}
          path="/classes"
          loading={isLoading}
        />
      )}
    </>
  );
};

export default Class;
