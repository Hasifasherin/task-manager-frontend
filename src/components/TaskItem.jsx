import API from "../services/api";

const statusColor = {
  "not started": "bg-gray-200 text-gray-700",
  "in progress": "bg-yellow-200 text-yellow-800",
  completed: "bg-green-200 text-green-800",
};

const priorityColor = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-purple-100 text-purple-800",
  high: "bg-red-100 text-red-800",
};

export default function TaskItem({ task, onSelect, refresh }) {
  const markCompleted = async (e) => {
    e.stopPropagation();
    try {
      await API.put(`/tasks/${task._id}`, { status: "completed" });
      refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to mark task as completed");
    }
  };

  const removeTask = async (e) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure to delete this task?")) return;
    try {
      await API.delete(`/tasks/${task._id}`);
      refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to delete task");
    }
  };

  return (
    <div
      onClick={() => onSelect(task)}
      className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center mb-3 cursor-pointer hover:shadow-lg transition-all duration-200"
    >
      <div>
        <h3 className={`font-medium text-lg ${task.status === "completed" ? "line-through text-gray-400" : "text-gray-800"}`}>
          {task.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Due {new Date(task.dueDate).toLocaleDateString()}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className={`text-xs px-3 py-1 rounded-full capitalize font-semibold ${statusColor[task.status]}`}>
          {task.status}
        </span>
        <span className={`text-xs px-3 py-1 rounded-full capitalize font-semibold ${priorityColor[task.priority]}`}>
          {task.priority}
        </span>

        {task.status !== "completed" && (
          <button onClick={markCompleted} title="Mark Completed" className="text-green-600 font-bold hover:scale-110 transition-transform">
            ✓
          </button>
        )}

        <button onClick={removeTask} title="Delete" className="text-red-500 font-bold hover:scale-110 transition-transform">
          ✕
        </button>
      </div>
    </div>
  );
}
