import React from "react";
import { Button, Form, Input, InputNumber, Mentions } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const AddUser: React.FC = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || "filled"}
      style={{ maxWidth: 600, padding: 40, alignItems: "center" }}
      initialValues={{ variant: "filled" }}
    >
      <Form.Item
        label="Tên"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tuổi"
        name="age"
        rules={[{ required: true, message: "Vui lòng nhập tuổi!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Số diện thoại"
        name="phone"
        rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
      >
        <Mentions />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUser;
