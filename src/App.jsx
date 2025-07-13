import React from "react";
import { TaskProvider } from "./context/TaskContext";
import KanbanBoard from "./components/KanbanBoard";

export default function App() {
  return (
    <TaskProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
        <KanbanBoard />
      </div>
    </TaskProvider>
  );
}
