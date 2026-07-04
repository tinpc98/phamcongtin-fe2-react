import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { data } from "react-router-dom";

const AddProduct = () => {
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
        label="Tên Sản Phẩm"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Giá Sản Phẩm"
        name="price"
        rules={[
          { required: true, message: "Vui lòng nhập giá sản phẩm" },
          {
            type: "number",
            min: 0,
            message: "Giá phải lớn hơn 0",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Số Lượng"
        name="quantity"
        rules={[
          { required: true, message: "Vui lòng nhập số lượng" },
          {
            type: "number",
            min: 0,
            message: "Số lượng lớn hơn 0",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item label="Mô tả" name="describe">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
