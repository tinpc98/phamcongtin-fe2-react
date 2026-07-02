import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <span style={{ color: status === "active" ? "green" : "red" }}>
        {status}
      </span>
    ),
  },
  {
    title: "Action",
    render: (_, record) => (
      <>
        <button
          style={{
            border: "1px solid black",
            padding: "10px",
            background: "green",
          }}
        >
          Edit
        </button>
        <button
          style={{
            border: "1px solid black",
            padding: "10px",
            background: "red",
          }}
        >
          Delete
        </button>
      </>
    ),
  },
];
const data = [
  {
    id: 1,
    name: "Nam",
    email: "nam@example.com",
    status: "active",
  },
  { id: 2, name: "Hoa", email: "hoa@example.com", status: "active" },
  { id: 3, name: "Tuan", email: "tuan@example.com", status: "inactive" },
  { id: 4, name: "Linh", email: "linh@example.com", status: "active" },
  { id: 5, name: "Duc", email: "duc@example.com", status: "active" },
  { id: 6, name: "Mai", email: "mai@example.com", status: "inactive" },
];
export default function ListUserManagement() {
  return <Table columns={columns} dataSource={data} />;
}
