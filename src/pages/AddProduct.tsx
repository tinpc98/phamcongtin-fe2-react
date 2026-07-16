import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Story {
  title: string;
  author: string;
  description?: string;
  createdAt?: string;
  image?: string;
  categoryId?: number | string;
}

interface Category {
  id?: number | string;
  title: string;
  description?: string;
  active?: boolean;
}

const AddProduct = () => {
  const navigate = useNavigate();

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<
    Category[]
  >({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get<Category[]>(
        "http://localhost:3000/categories",
      );
      return res.data;
    },
  });

  const storyMutation = useMutation<Story, Error, Story>({
    mutationFn: async (data: Story) => {
      const res = await axios.post<Story>(
        "http://localhost:3000/stories",
        data,
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("Thêm thành công");
      navigate("/stories");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const categoryOptions = (categories || []).map((category: Category) => ({
    value: category.id,
    label: category.title,
  }));

  const onStoryFinish = (values: Story) => {
    storyMutation.mutate({
      ...values,
      createdAt: values.createdAt || new Date().toISOString(),
    });
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Form
        onFinish={onStoryFinish}
        layout="vertical"
        style={{ marginBottom: 32 }}
      >
        <h3>Thêm truyện mới</h3>
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
          <Button
            type="primary"
            htmlType="submit"
            loading={storyMutation.isPending}
          >
            Thêm truyện
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
