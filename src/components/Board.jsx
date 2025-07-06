import React from "react";
import Column from "./Column";

const columns = ["To Do", "In Progress", "Done"];

export default function Board() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {columns.map((col) => (
        <Column key={col} status={col} />
      ))}
    </div>
  );
}
