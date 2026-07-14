import React from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface StoryData {
  image: string;
  title: string;
  author: string;
  description: string;
  createdAt: string;
}

const AddProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const addStoryMutation = useMutation({
    mutationFn: async (newStory: StoryData) => {
      const response = await axios.post(
        `http://localhost:3000/stories`,
        newStory,
      );
      return response.data;
    },
    onSuccess: () => {
      message.success("Thêm truyện thành công");
      form.resetFields();
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/stories");
    },
    onError: (error) => {
      message.error("Thêm truyện thất bại");
      console.error("Lỗi:", error);
    },
  });
  const onFinish = async (data: any) => {
    addStoryMutation.mutate({
      image: data.image,
      title: data.title,
      author: data.author,
      description: data.description,
      createdAt: data.createdAt || new Date().toISOString(),
    });
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Vui lòng nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tác giả"
        name="author"
        rules={[{ required: true, message: "Vui lòng nhập tác giả" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Mô tả" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Ngày xuất bản" name="createdAt">
        <Input />
      </Form.Item>
      <Form.Item label="Hình ảnh" name="image">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm truyện
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
