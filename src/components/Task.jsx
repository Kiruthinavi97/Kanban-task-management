import React from "react";

export default function Task({ task }) {
  return (
    <div className="bg-gray-200 p-2 rounded">
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm text-gray-700">{task.description}</p>
    </div>
  );
}
