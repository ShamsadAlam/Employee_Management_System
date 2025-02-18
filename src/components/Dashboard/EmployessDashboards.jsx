import React from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../Tasklist/TaskList";

const EmployessDashboards = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployessDashboards;
