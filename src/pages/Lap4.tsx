import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Table, Image, Spin, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Color } from "antd/es/color-picker";

const Stories = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
  const queryClient = useQueryClient();
  const [keyword, setKeyword] = useState("");
  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  const handleDelete = async (id: number) => {
    if (!confirm("Bạn có chắc muốn xóa mục này?")) return;
    try {
      await axios.delete(`http://localhost:3000/stories/${id}`);
      queryClient.invalidateQueries(["stories"]);
    } catch (error) {
      console.error(error);
      alert("Xảy ra lỗi khi xóa");
    }
  };

  const navigate = useNavigate();
  const addStories = () => {
    navigate("/addproduct");
  };
  const addCategory = () => {
    navigate("/addcategorystories");
  };
  const editStories = (id: number) => {
    navigate(`/editstories/${id}`);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Ngày xuất bản",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Thao tác",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            onClick={() => editStories(record.id)}
            style={{ background: "green", gap: 10 }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            onClick={() => handleDelete(record.id)}
            style={{ background: "red", gap: 10 }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;
  return (
    <>
      <Input
        placeholder="Tìm kiếm theo tên truyện"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ width: 300, marginBottom: 16 }}
      />
      <Button
        type="primary"
        onClick={addStories}
        style={{ marginRight: 7, gap: 20, padding: 10 }}
      >
        Thêm truyện
      </Button>
      <Button type="primary" onClick={addCategory}>
        Thêm danh mục truyện
      </Button>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default Stories;
