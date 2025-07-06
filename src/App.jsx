import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Board from "./components/Board";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Kanban Board</h1>
        <AddTaskForm />
        <Board />
      </div>
    </TaskProvider>
  );
}
