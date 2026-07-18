import React, { useEffect } from "react";
import { Button, Form, Input, message, Select, Spin } from "antd";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

interface Story {
  title: string;
  author: string;
  description?: string;
  createdAt?: string;
  image?: string;
  categoryId?: number | string;
}

const EditStories = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  const categoryOptions =
    categories?.map((cat: any) => ({
      label: cat.name,
      value: cat.title,
    })) || [];

  const { data, isLoading } = useQuery({
    queryKey: ["Story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const mutation = useMutation({
    mutationFn: async (value: any) => {
      return axios.put(`http://localhost:3000/stories/${id}`, value);
    },
    //     mutationFn: async (value: any) => {
    //       return axios.patch(`http://localhost:3000/stories/${id}`, {
    //   title: values.title,
    // }));
    //     },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      message.success("Cập nhật thành công");
      navigate("/stories");
    },
  });

  const onFinish = (value: any) => {
    mutation.mutate(value);
  };

  if (isLoading) return <Spin />;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ marginBottom: 32 }}
        disabled={mutation.isPending}
      >
        <h3>Cập nhật truyện</h3>
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
        <Form.Item
          label="Danh mục"
          name="categoryId"
          rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
        >
          <Select
            placeholder="Chọn danh mục"
            options={categoryOptions}
            loading={categoriesLoading}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Ngày xuất bản" name="createdAt">
          <Input />
        </Form.Item>
        <Form.Item label="Hình ảnh" name="image">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={mutation.isPending}>
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditStories;
