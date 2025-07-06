import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const getLocalTasks = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(getLocalTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
