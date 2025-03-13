import DFetchingError from "@/components/Loading/Error";
import DFetchingLoading from "@/components/Loading/Loading";
import DTable from "@/components/Table/DTable";
import useDFetch from "@/hooks/useDFetch";

const User = () => {
  const { data: users, isLoading, isError } = useDFetch("/users");

  return (
    <>
      {isLoading ? (
        <DFetchingLoading />
      ) : isError ? (
        <DFetchingError />
      ) : (
        <>
          <DTable
            tableName="Users"
            columns={[
              {
                title: "Username",
                dataIndex: "username",
                key: "username",
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
              },
              {
                title: "Role",
                dataIndex: "role",
                key: "role",
              },
            ]}
            data={users}
            path="/users"
            pageSize={3}
            loading={isLoading}
          />
        </>
      )}
    </>
  );
};

export default User;
