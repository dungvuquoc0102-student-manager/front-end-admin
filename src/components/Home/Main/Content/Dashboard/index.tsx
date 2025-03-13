import DFetchingError from "@/components/Loading/Error";
import DFetchingLoading from "@/components/Loading/Loading";
import instance from "@/services/axios";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [numberOfClasses, setNumberOfClasses] = useState(0);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const classRes = await instance.get("/classes");
        setNumberOfClasses(classRes.data.data.length);
        const userRes = await instance.get("/users");
        setNumberOfUsers(userRes.data.data.length);
      } catch (error: any) {
        console.log(error?.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <DFetchingLoading />
      ) : isError ? (
        <DFetchingError />
      ) : (
        <div>
          <Typography.Title level={2}>Dashboard</Typography.Title>
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal" align="start">
                <HomeOutlined />
                <Statistic title="Total Classes" value={numberOfClasses} />
              </Space>
            </Card>
            <Card>
              <Space direction="horizontal" align="start">
                <UserOutlined />
                <Statistic title="Total Users" value={numberOfUsers} />
              </Space>
            </Card>
          </Space>
        </div>
      )}
    </>
  );
};

export default Dashboard;
