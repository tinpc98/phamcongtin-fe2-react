import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "ProductName",
    dataIndex: "productname",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
];
const data = [
  { id: 1, productname: "Laptop Asus", price: 1500, category: "Electronics" },
  {
    id: 2,
    productname: "Điện thoại Samsung",
    price: 900,
    category: "Electronics",
  },
  { id: 3, productname: "Áo thun", price: 25, category: "Fashion" },
  { id: 4, productname: "Bàn phím cơ", price: 80, category: "Accessories" },
  { id: 5, productname: "Tai nghe Bluetooth", price: 60, category: "Audio" },
];
export default function ListProduct() {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
  );
}
