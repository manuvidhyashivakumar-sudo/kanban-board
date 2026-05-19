import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskModal({ task, closeModal }) {
  const { updateTask } =
    useContext(TaskContext);

  const [editedTask, setEditedTask] =
    useState(task);

  const handleSave = () => {
    updateTask(editedTask);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-2xl font-bold mb-4">
          Edit Task
        </h2>

        <input
          type="text"
          value={editedTask.title}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              title: e.target.value,
            })
          }
          className="border p-2 w-full mb-3 rounded"
        />

        <textarea
          value={editedTask.description}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              description: e.target.value,
            })
          }
          className="border p-2 w-full mb-3 rounded"
        />

        <select
          value={editedTask.status}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              status: e.target.value,
            })
          }
          className="border p-2 w-full mb-3 rounded"
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

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>

          <button
            onClick={closeModal}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;