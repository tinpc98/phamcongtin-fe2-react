import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Category {
  title: string;
  description?: string;
  active?: boolean;
}

const AddCategoryStories = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [categoryForm] = Form.useForm();

  const categoryMutation = useMutation<Category, Error, Category>({
    mutationFn: async (data: Category) => {
      const res = await axios.post<Category>(
        "http://localhost:3000/categories",
        data,
      );
      return res.data;
    },
    onSuccess: async () => {
      toast.success("Tạo danh mục thành công");
      categoryForm.resetFields();
      await queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/stories");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra khi tạo danh mục");
    },
  });

  const onCategoryFinish = (values: Category) => {
    categoryMutation.mutate({
      ...values,
      active: Boolean(values.active),
    });
  };
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Form form={categoryForm} onFinish={onCategoryFinish} layout="vertical">
        <h3>Thêm danh mục truyện</h3>
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="active" valuePropName="checked">
          <Checkbox>Hoạt động</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            loading={categoryMutation.isPending}
          >
            Tạo danh mục
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategoryStories;
