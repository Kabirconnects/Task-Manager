import React, { useContext } from "react";
import { PersonContext } from "../components/context/PersonContext";

function TaskListNumber() {
  const { person } = useContext(PersonContext);

  const personData = person && person.tasks ? person.tasks : [];

  // Calculate task counts
  const totalTasks = personData.length;
  const newTasks = personData.filter(task => task.newtask).length;
  const completedTasks = personData.filter(task => task.completed).length;
  const failedTasks = personData.filter(task => task.failed).length;
  const activeTasks = personData.filter(task => task.active).length;

  return (
    <div className="h-auto w-full relative p-3">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {/* Total Tasks */}
        <div className="w-full bg-blue-500 h-32 rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl">{totalTasks}</h1>
          <h2 className="text-white">Total Tasks</h2>
        </div>

        {/* New Tasks */}
        <div className="w-full bg-yellow-500 h-32 rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl">{newTasks}</h1>
          <h2 className="text-white">New Tasks</h2>
        </div>

        {/* Completed Tasks */}
        <div className="w-full bg-green-500 h-32 rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl">{completedTasks}</h1>
          <h2 className="text-white">Completed Tasks</h2>
        </div>

        {/* Failed Tasks */}
        <div className="w-full bg-red-500 h-32 rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl">{failedTasks}</h1>
          <h2 className="text-white">Failed Tasks</h2>
        </div>

        {/* Active Tasks */}
        <div className="w-full bg-purple-500 h-32 rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl">{activeTasks}</h1>
          <h2 className="text-white">Active Tasks</h2>
        </div>
      </div>
    </div>
  );
}

export default TaskListNumber;
