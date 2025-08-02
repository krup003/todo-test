import { useState } from "react";
import "./App.css";
import TaskCard from "./components/taskCard";

interface TaskDetails {
  taskName: string;
}

function App() {
  const [totalTask, setTotalTask] = useState<TaskDetails[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const handleAddTask = () => {
    setTotalTask([...totalTask, { taskName: taskName }]);
    setTaskName("");
  };

  const handleDelete = (index: number) => {
    const newTaskLists = [...totalTask];
    newTaskLists.splice(index, 1);
    setTotalTask(newTaskLists);
  };

  console.log("taskName", taskName);
  console.log("totalTask", totalTask);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-3.5 font-bold">To Do List</h1>

        <form onSubmit={handleAddTask}>
          <div className="flex justify-center gap-6">
            <div>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="bg-gray-50 border w-3xs border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please Add the Task"
                required
              />
            </div>
            <button
              type="submit"
              className=" text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add Task
            </button>
          </div>
        </form>

        <div className="px-6 grid grid-cols-4 gap-3">
          {totalTask.length >= 1 ? (
            <>
              {totalTask?.map((item, index) => {
                return (
                  <div key={index}>
                    <TaskCard
                      taskName={item.taskName}
                      handleDelete={() => handleDelete(index)}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <div className="flex justify-center items-center text-5xl">
              No Tasks
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
