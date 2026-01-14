export default function TaskDetails({ task, onClose }) {
  if (!task) return null;

  // Map status to color
  const statusColors = {
    "not started": "bg-gray-200 text-gray-800",
    "in progress": "bg-yellow-200 text-yellow-800",
    completed: "bg-green-200 text-green-800",
  };

  const priorityColors = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-orange-100 text-orange-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <aside className="w-80 bg-white p-6 border-l border-gray-200 shadow-lg rounded-l-lg transition-all">
      {/* Close */}
      <button
        onClick={onClose}
        className="float-right text-gray-400 hover:text-gray-800 transition"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{task.title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-6">
        {task.description || "No description"}
      </p>

      {/* Details */}
      <div className="space-y-4 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Status</span>
          <span className={`px-3 py-1 rounded-full ${statusColors[task.status] || "bg-gray-200 text-gray-800"}`}>
            {task.status}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Priority</span>
          <span className={`px-3 py-1 rounded-full ${priorityColors[task.priority] || "bg-gray-200 text-gray-800"}`}>
            {task.priority}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Due Date</span>
          <span>{new Date(task.dueDate).toDateString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Category</span>
          <span>{task.category}</span>
        </div>
      </div>
    </aside>
  );
}
