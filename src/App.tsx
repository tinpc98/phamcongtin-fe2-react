import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import DashBoard from "./admin/dashboard";
import Login from "./pages/Login";
import ListUser from "./pages/ListUser";
import AddUser from "./pages/AddUser";
import ListStudent from "./pages/ListStudent";
import ListProduct from "./pages/ListProduct";
import ListUserManagement from "./pages/ListUserManagement";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage></HomePage>} />
        <Route path="dashboard" element={<DashBoard></DashBoard>} />
        <Route path="addproduct" element={<AddProduct></AddProduct>} />
        <Route path="listuser" element={<ListUser></ListUser>} />
        <Route path="adduser" element={<AddUser></AddUser>} />
        <Route path="liststudent" element={<ListProduct></ListProduct>} />
        <Route path="listproduct" element={<ListStudent></ListStudent>} />
        <Route path="post" element={<Post></Post>} />
        <Route
          path="listUsermanagement"
          element={<ListUserManagement></ListUserManagement>}
        />
        <Route path="login" element={<Login></Login>} />
        <Route path="Register" element={<Register></Register>} />
      </Routes>
    </>
  );
}

export default App;
