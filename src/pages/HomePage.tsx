import React from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/adduser");
  };
  const handleListStudent = () => {
    navigate("/liststudent");
  };
  const handleListProduct = () => {
    navigate("/listproduct");
  };
  const handleListUserManagement = () => {
    navigate("/listusermanagement");
  };
  const lap3 = () => {
    navigate("/lap3");
  };
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        <Button type="primary" onClick={handleAddUser}>
          Add User
        </Button>
        <div className=" text-left">
          <h2>Danh sách sinh viên</h2>
          <Button type="primary" onClick={handleListStudent}>
            Xem danh sách
          </Button>
        </div>
        <div className=" text-left">
          <h2>Danh sách Sản Phẩm</h2>
          <Button type="primary" onClick={handleListProduct}>
            Xem danh sách
          </Button>
        </div>
        <div className=" text-left">
          <h2>Danh sách Sản Phẩm</h2>
          <Button type="primary" onClick={handleListUserManagement}>
            Xem danh sách
          </Button>
        </div>
        <div className=" text-left">
          <h2>Lap3</h2>
          <Button type="primary" onClick={lap3}>
            Xem danh sách
          </Button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
