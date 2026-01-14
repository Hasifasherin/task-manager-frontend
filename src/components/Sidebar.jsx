import React from "react";

const Sidebar = () => {
  const categories = ["All Tasks", "Work", "Personal", "Urgent"];

  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
      <h2 className="font-bold text-xl mb-6">Categories</h2>
      <ul className="flex flex-col gap-2">
        {categories.map(cat => (
          <li
            key={cat}
            className="hover:bg-yellow-100 px-3 py-2 rounded cursor-pointer transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
