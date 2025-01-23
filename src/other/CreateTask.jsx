import React, { useContext, useState } from "react";
import { AuthContext } from "../components/context/AuthProvider";

function CreateTask() {
  const { data, setData } = useContext(AuthContext);

  const [tasktitle, setTaskTitle] = useState("");
  const [taskdescription, setTaskDescription] = useState("");
  const [taskdate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the employee to assign the task
    const updatedEmployees = data.employees.map((employee) => {
      if (employee.name === assignTo) {
        return {
          ...employee,
          tasks: [
            ...employee.tasks,
            {
              active: false,
              newtask: true,
              completed: false,
              failed: false,
              tasktitle: tasktitle,
              taskdescription: taskdescription,
              taskdate: taskdate,
              category: category,
            },
          ],
        };
      }
      return employee;
    });

    // Update the context with the new task
    const updatedData = { ...data, employees: updatedEmployees };
    setData(updatedData);

    // Clear the form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    // Set a success message
    setMessage("Task created and assigned successfully!");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black p-5">
      <div className="w-full md:w-3/4 lg:w-1/2 h-full md:h-fit bg-gray-900 text-gray-300 rounded-3xl p-10 shadow-lg mt-20">
        {message && <div className="mb-4 text-green-500">{message}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-400">
              Task Title
            </h3>
            <input
              value={tasktitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI Design"
              className="w-full h-10 rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-400">
              Description
            </h3>
            <textarea
              value={taskdescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              cols="30"
              rows="5"
              placeholder="Enter task details..."
              className="w-full rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-400">Date</h3>
            <input
              value={taskdate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full h-10 rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-sm font-medium mb-2 text-gray-400">
                Assign To
              </h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                type="text"
                placeholder="Employee Name"
                className="w-full h-10 rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-sm font-medium mb-2 text-gray-400">
                Categories
              </h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design, Dev, etc!"
                className="w-full h-10 rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold transition duration-200">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
