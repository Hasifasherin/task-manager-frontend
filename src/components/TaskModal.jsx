import React from "react";

const TaskModal = ({ task, onClose, onDelete, onEdit }) => {
  if (!task) return null;

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
        >
          &times;
        </button>

        {/* Task Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{task.title}</h2>

        {/* Task Description */}
        {task.description && (
          <p className="text-gray-600 mb-4">{task.description}</p>
        )}

        {/* Task Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[task.status]}`}
          >
            Status: {task.status}
          </span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${priorityColors[task.priority]}`}
          >
            Priority: {task.priority}
          </span>
        </div>

        {/* Due Date */}
        <p className="text-gray-500 mb-4">
          <strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => onEdit(task)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
