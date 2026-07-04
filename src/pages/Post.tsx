import React, { useState } from "react";
import { Button, Form, Input, Select, Table } from "antd";

const Post = () => {
  const [postData, setPostData] = useState<any>(null);

  const onFinish = (data: any) => {
    console.log(data);
    setPostData(data);
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Danh mục"
          name="category"
          rules={[{ required: true, message: "Vui lòng nhập danh mục" }]}
        >
          <Select
            placeholder="Chọn danh mục"
            options={[
              { label: "Công nghệ thông tin", value: "it" },
              { label: "Thiết kế", value: "design" },
              { label: "Kinh doanh", value: "business" },
              { label: "Marketing", value: "marketing" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Vui lòng nhập slug" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nội dung"
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Hình ảnh"
          name="image"
          rules={[{ required: true, message: "Vui lòng nhập hình ảnh" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm bài viết
          </Button>
        </Form.Item>
      </Form>
      <h2>Bài viết</h2>
      {postData && (
        <Table
          dataSource={[{ key: 1, ...postData }]}
          pagination={false}
          style={{ marginTop: 20, maxWidth: 1000, margin: "20px auto" }}
          columns={[
            { title: "Tiêu đề", dataIndex: "title", key: "title" },
            { title: "Danh mục", dataIndex: "category", key: "category" },
            { title: "Slug", dataIndex: "slug", key: "slug" },
            { title: "Nội dung", dataIndex: "content", key: "content" },
            { title: "Hình ảnh", dataIndex: "image", key: "image" },
          ]}
        />
      )}
    </>
  );
};

export default Post;
