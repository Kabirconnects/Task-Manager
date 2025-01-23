import React, { useContext } from "react";
import { PersonContext } from "../components/context/PersonContext";

function TaskList() {
  const { person, setPerson } = useContext(PersonContext);
  const name = person.name;
  const userData = JSON.parse(localStorage.getItem("employees") || "[]");

  const handleActiveTasks = (e, task) => {
    e.preventDefault();

    const userIndex = userData.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      const taskIndex = userData[userIndex].tasks.findIndex(
        (t) => t.tasktitle === task.tasktitle
      );
      if (taskIndex !== -1) {
        userData[userIndex].tasks[taskIndex].active = true;
        localStorage.setItem("employees", JSON.stringify(userData));

        const personTasks = [...person.tasks];
        const personTaskIndex = personTasks.findIndex(
          (t) => t.tasktitle === task.tasktitle
        );
        if (personTaskIndex !== -1) {
          personTasks[personTaskIndex].active = true;
          setPerson({ ...person, tasks: personTasks });
          localStorage.setItem(
            "person",
            JSON.stringify({ ...person, tasks: personTasks })
          );
        }
      } else {
        console.log(`Task not found for ${name}`);
      }
    } else {
      console.log(`User not found: ${name}`);
    }
  };

  const handleCompletedTasks = (e, task) => {
    e.preventDefault();

    const userIndex = userData.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      const taskIndex = userData[userIndex].tasks.findIndex(
        (t) => t.tasktitle === task.tasktitle
      );
      if (taskIndex !== -1) {
        userData[userIndex].tasks[taskIndex].completed = true;
        localStorage.setItem("employees", JSON.stringify(userData));

        const personTasks = [...person.tasks];
        const personTaskIndex = personTasks.findIndex(
          (t) => t.tasktitle === task.tasktitle
        );
        if (personTaskIndex !== -1) {
          personTasks[personTaskIndex].completed = true;
          setPerson({ ...person, tasks: personTasks });
          localStorage.setItem(
            "person",
            JSON.stringify({ ...person, tasks: personTasks })
          );
        }
      } else {
        console.log(`Task not found for ${name}`);
      }
    } else {
      console.log(`User not found: ${name}`);
    }
  };

  const handleDeactivateTask = (e, task) => {
    e.preventDefault();
  
    const userIndex = userData.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      const taskIndex = userData[userIndex].tasks.findIndex(
        (t) => t.tasktitle === task.tasktitle
      );
      if (taskIndex !== -1) {
        userData[userIndex].tasks[taskIndex].active = false;
        localStorage.setItem("employees", JSON.stringify(userData));
  
        const personTasks = [...person.tasks];
        const personTaskIndex = personTasks.findIndex(
          (t) => t.tasktitle === task.tasktitle
        );
        if (personTaskIndex !== -1) {
          personTasks[personTaskIndex].active = false;
          setPerson({ ...person, tasks: personTasks });
          localStorage.setItem(
            "person",
            JSON.stringify({ ...person, tasks: personTasks })
          );
        }
      } else {
        console.log(`Task not found for ${name}`);
      }
    } else {
      console.log(`User not found: ${name}`);
    }
  };
  

  const handleIncompleteTask = (e, task) => {
    e.preventDefault();

    const userIndex = userData.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      const taskIndex = userData[userIndex].tasks.findIndex(
        (t) => t.tasktitle === task.tasktitle
      );
      if (taskIndex !== -1) {
        userData[userIndex].tasks[taskIndex].completed = false;
        localStorage.setItem("employees", JSON.stringify(userData));

        const personTasks = [...person.tasks];
        const personTaskIndex = personTasks.findIndex(
          (t) => t.tasktitle === task.tasktitle
        );
        if (personTaskIndex !== -1) {
          personTasks[personTaskIndex].completed = false;
          setPerson({ ...person, tasks: personTasks });
          localStorage.setItem(
            "person",
            JSON.stringify({ ...person, tasks: personTasks })
          );
        }
      } else {
        console.log(`Task not found for ${name}`);
      }
    } else {
      console.log(`User not found: ${name}`);
    }
  };

  const colors = [
    "#CC4629",
    "#29CC46",
    "#2946CC",
    "#CC2982",
    "#8229CC",
    "#CC9E00",
  ];

  return (
    <div
      id="taskList"
      className="w-full overflow-x-auto mt-10 h-1/2 m-5 rounded-3xl p-5 flex justify-start items-center gap-5 flex-nowrap relative"
    >
      {person.tasks && person.tasks.length > 0 ? (
        person.tasks.map((task, index) => (
          <div
            key={index}
            className="h-[50vh] w-[300px] rounded-3xl flex-shrink-0 group"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <div className="flex justify-between items-center p-5 text-white font-sans">
              <h3
                className={`px-3 py-1 rounded text-sm ${
                  task.completed ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {task.completed ? "Completed" : "High"}
              </h3>
              <h4>{task.taskdate}</h4>
            </div>
            <div className="p-3 text-gray-300">
              <h2 className="mt-5 text-2xl font-semibold">{task.tasktitle}</h2>
              <p className="text-sm mt-3">{task.taskdescription}</p>
            </div>

            <div className="flex flex-col justify-center gap-4 text-gray-300 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-row gap-4 justify-center">
                <button
                  onClick={(e) => handleActiveTasks(e, task)}
                  className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Active Tasks
                </button>
                <button
                  onClick={(e) => handleCompletedTasks(e, task)}
                  className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Completed Tasks
                </button>
              </div>
              <div className="flex flex-row gap-4 justify-center">
                <button
                  onClick={(e) => handleDeactivateTask(e, task)}
                  className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-700 transition duration-200"
                >
                  Deactivate Task
                </button>
                <button
                  onClick={(e) => handleIncompleteTask(e, task)}
                  className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-700 transition duration-200"
                >
                  Incomplete Task
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskList;
