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
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Major",
    dataIndex: "major",
  },
];
const data = [
  { id: 1, name: "Nam", age: 20, major: "IT" },
  {
    id: 2,
    name: "Linh",
    age: 21,
    major: "Business",
  },
  {
    id: 3,
    name: "Hà",
    age: 19,
    major: "Design",
  },
];
export default function ListStudent() {
  return <Table columns={columns} dataSource={data} />;
}
