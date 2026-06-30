import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  role: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    email: "Brown@genImagePreviewStyle.com",
    role: "admin",
  },
  {
    key: "2",
    name: "Jane Smith",
    email: "Jane.Smith@example.com",
    role: "user",
  },
  {
    key: "3",
    name: "Michael Johnson",
    email: "Michael.Johnson@example.com",
    role: "editor",
  },
  {
    key: "4",
    name: "Emily Davis",
    email: "Emily.Davis@example.com",
    role: "user",
  },
  {
    key: "5",
    name: "William Lee",
    email: "William.Lee@example.com",
    role: "admin",
  },
  {
    key: "6",
    name: "Sophia Martinez",
    email: "Sophia.Martinez@example.com",
    role: "user",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows,
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const ListUser: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox",
  );

  return (
    <div>
      <Radio.Group
        onChange={(e) => setSelectionType(e.target.value)}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>
      <Divider />
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ListUser;
