import React from "react";

export default function Topbar({ onNewTask, searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-md mb-6">
      
      {/* Search */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition duration-200"
        aria-label="Search tasks"
      />

      {/* New Task Button */}
      <button
        onClick={onNewTask}
        className="mt-3 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-lg 
                   font-medium hover:bg-blue-700 active:scale-95 transition transform"
        aria-label="Create new task"
      >
        + New Task
      </button>
    </div>
  );
}
