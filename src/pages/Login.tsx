import React from "react";
import { Button, Form, Input } from "antd";

const Login = () => {
  const onFinish = (data: any) => {
    console.log(data);
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email" },
          { type: "email", message: "Email sai định dạng" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu" },
          { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
