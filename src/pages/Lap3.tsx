import { Button, Form, Input, InputNumber } from "antd";

function Lap3() {
  const onFinish = (data: any) => {
    console.log(data);
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui long nhap ten" },
          { type: "email", message: "Email sai dinh dang" },
        ]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          { required: true, message: "Vui long nhap gia" },
          { min: 0, type: "number", message: "Gia phai la so và không âm" },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Vui long nhap mk" }]}
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
}
export default Lap3;
