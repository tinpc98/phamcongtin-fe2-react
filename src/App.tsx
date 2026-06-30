import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import DashBoard from "./admin/dashboard";
import Login from "./pages/Login";
import ListUser from "./pages/ListUser";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage></HomePage>} />
        <Route path="dashboard" element={<DashBoard></DashBoard>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="listuser" element={<ListUser></ListUser>} />
        <Route path="adduser" element={<AddUser></AddUser>} />
      </Routes>
    </>
  );
}

export default App;
