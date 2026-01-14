import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import TaskCard from "../components/TaskCard.jsx";
import TaskModal from "../components/TaskModal.jsx";
import TaskForm from "../components/TaskForm.jsx";
import api from "../services/api.js";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  // Task click handler
  const handleTaskClick = (task) => setSelectedTask(task);

  // Delete task
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this task?")) {
      await api.delete(`/tasks/${id}`);
      setSelectedTask(null);
      fetchTasks();
    }
  };

  // Edit task
  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  // Form submit (add or update)
  const handleFormSubmit = async (task) => {
    try {
      if (task._id) {
        await api.put(`/tasks/${task._id}`, task);
      } else {
        await api.post("/tasks", task);
      }
      setShowForm(false);
      setSelectedTask(null);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar onLogout={handleLogout} />

      {/* Main layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Tasks & Calendar Area */}
        <main className="flex-1 p-6">
          {/* Header + Add Task */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-700">My Tasks</h2>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
              onClick={() => setShowForm(true)}
            >
              + Add Task
            </button>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.length === 0 && (
              <p className="col-span-full text-gray-500 text-center">
                No tasks found. Add your first task!
              </p>
            )}
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} onClick={handleTaskClick} />
            ))}
          </div>
        </main>
      </div>

      {/* Task Modal */}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}

      {/* Task Form Modal */}
      {showForm && (
        <TaskForm
          task={selectedTask}
          onSubmit={handleFormSubmit}
          onClose={() => {
            setShowForm(false);
            setSelectedTask(null);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
