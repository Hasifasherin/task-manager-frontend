import React from "react";

const Navbar = ({ onLogout }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-yellow-500 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-2xl">Task Manager</h1>
      <div className="flex items-center gap-4">
        <span className="text-white font-medium">{user?.name}</span>
        <button
          onClick={onLogout}
          className="bg-yellow-700 hover:bg-yellow-800 text-white px-3 py-1 rounded shadow"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
