import React, { useContext } from "react";
import { AuthContext } from "../components/context/AuthProvider";

function AllTask() {
  const { data } = useContext(AuthContext);

  const employees = data && data.employees ? data.employees : [];

  // console.log("samis", employees);

  return (
    <div className="p-6 bg-black text-white h-fit py-20">
      <div className="bg-gray-900 shadow-lg rounded-lg p-4">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 font-semibold text-white border-b border-gray-700 pb-2 mb-4">
          <div>Name</div>
          <div>Total Tasks</div>
          <div>New Tasks</div>
          <div>Completed Tasks</div>
          <div>Failed Tasks</div>
          <div>Active Tasks</div>
        </div>
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="grid grid-cols-6 gap-4 text-gray-300 border-b border-gray-700 pb-2 py-3"
          >
            <div>{employee.name}</div>
            <div className="ml-7">{employee.tasks.length}</div>
            <div className="ml-7">{employee.tasks.filter((task) => task.newtask).length}</div>
            <div className="ml-7">{employee.tasks.filter((task) => task.completed).length}</div>
            <div className="ml-7">{employee.tasks.filter((task) => task.failed).length}</div>
            <div className="ml-7">{employee.tasks.filter((task) => task.active).length}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
