import React from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/adduser");
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        <Button type="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
