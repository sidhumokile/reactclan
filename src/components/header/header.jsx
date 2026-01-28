import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">React Learning Guide</h1>

      {user && (
        <div className="flex items-center gap-4">
          <span>Hi, {user.username}</span>
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
