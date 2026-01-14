import React from "react";

const TaskCard = ({ task, onClick }) => {
  const statusColors = {
    "not started": "bg-gray-200 text-gray-700",
    "in progress": "bg-blue-200 text-blue-800",
    completed: "bg-green-200 text-green-800",
  };

  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
      onClick={() => onClick(task)}
    >
      <h3 className="text-lg font-bold mb-1">{task.title}</h3>
      <p className="text-gray-600 mb-2 line-clamp-2">{task.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span
          className={`text-xs px-2 py-1 rounded-full ${statusColors[task.status]}`}
        >
          {task.status}
        </span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
