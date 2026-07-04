import React from "react";
import { Button, Form, Input, InputNumber } from "antd";

const Register = () => {
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
        label="Name"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập tên" }]}
      >
        <Input />
      </Form.Item>
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
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại" },
          { type: "number", min: 10, message: "Số điện thoại phải 10 số" },
        ]}
      >
        <InputNumber />
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
      <Form.Item
        label="ConfirmPassword"
        name="confirmpassword"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu" },
          { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              // Sử dụng getFieldValue('password') để lấy trực tiếp giá trị string
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không khớp"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
