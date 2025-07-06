import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTaskForm() {
  const { tasks, setTasks } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded mb-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}
