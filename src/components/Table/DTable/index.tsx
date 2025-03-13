import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space, Typography, Table, Tooltip, Input, Select } from "antd";
import { Link } from "react-router-dom";
import type { TableProps } from "antd/es/table";
import styles from "./DTable.module.scss";

interface DTableProps<T> {
  tableName?: string;
  columns: TableProps<T>["columns"]; // Kiểu của columns từ Ant Design
  data: T[];
  path: string;
  pageSize?: number;
  loading?: boolean;
}

const DTable = <T extends Record<string, any>>({
  tableName,
  columns,
  data,
  path,
  pageSize,
  loading,
}: DTableProps<T>) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Space size={20} direction="vertical" style={{ width: "100%" }}>
      <Typography.Title style={{ margin: 0 }} level={2}>
        {tableName || ""}
      </Typography.Title>
      <div className={styles.tableHeader}>
        <Input placeholder="Basic usage" />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
      </div>
      <Table
        columns={[
          ...(columns || []),
          {
            title: "Created At",
            dataIndex: "createdAt",
            key: "created-at",
            render: (item) => {
              return new Date(item).toLocaleString();
            },
          },
          {
            title: "Action",
            key: "action",
            render: (item) => {
              return (
                <>
                  <Space size="middle">
                    <Tooltip title="View Detail">
                      <Link to={`/admin${path}/detail/${item._id || ""}`}>
                        <EyeOutlined />
                      </Link>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <Link to={`/admin${path}/edit/${item._id || ""}`}>
                        <EditOutlined />
                      </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <Link to={`/admin${path}/delete/${item._id || ""}`}>
                        <DeleteOutlined />
                      </Link>
                    </Tooltip>
                  </Space>
                </>
              );
            },
          },
        ]}
        dataSource={data}
        pagination={{
          pageSize: pageSize,
        }}
        loading={loading || false}
      ></Table>
    </Space>
  );
};

export default DTable;
