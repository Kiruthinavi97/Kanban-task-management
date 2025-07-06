import React from "react";
import { useTasks } from "../context/TaskContext";
import Task from "./Task";

export default function Column({ status }) {
  const { tasks } = useTasks();
  const filtered = tasks.filter((task) => task.status === status);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{status}</h2>
      <div className="space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
