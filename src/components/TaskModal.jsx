import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskModal({ task, close }) {
  const { updateTask } =
    useContext(TaskContext);

  const [editTask, setEditTask] =
    useState(task);

  const handleSave = () => {
    updateTask(editTask);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-slate-800 p-8 rounded-3xl w-[90%] md:w-[500px]">
        <h2 className="text-3xl font-bold mb-5">
          Edit Task
        </h2>

        <input
          value={editTask.title}
          onChange={(e) =>
            setEditTask({
              ...editTask,
              title: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-slate-700 mb-4"
        />

        <textarea
          value={editTask.description}
          onChange={(e) =>
            setEditTask({
              ...editTask,
              description: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-slate-700 mb-4"
        />

        <select
          value={editTask.status}
          onChange={(e) =>
            setEditTask({
              ...editTask,
              status: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-slate-700 mb-4"
        >
          <option value="todo">
            To Do
          </option>

          <option value="progress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>
        </select>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="bg-green-500 px-5 py-2 rounded-xl"
          >
            Save
          </button>

          <button
            onClick={close}
            className="bg-red-500 px-5 py-2 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;