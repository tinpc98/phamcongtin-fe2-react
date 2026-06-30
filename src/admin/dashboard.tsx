import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
export default function DashBoard() {
  return (
    <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
