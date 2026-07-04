import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/listuser" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/addproduct" className="hover:text-gray-200">
              Thêm mới
            </Link>
            <Link to="/dashboard" className="hover:text-gray-200">
              DashBoard
            </Link>
            <Link to="/post" className="hover:text-gray-200">
              Bài viết
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
