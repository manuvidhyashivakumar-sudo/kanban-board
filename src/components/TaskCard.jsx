import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { FaTrash } from "react-icons/fa";

var _jsxFileName = "C:/Users/Administrator/Desktop/ReactProject/kanban-board/src/components/TaskCard.jsx";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"; 

function TaskCard({ task, openModal }) {
  const { deleteTask } =
    useContext(TaskContext);

  return (
    <div
      className="bg-white p-4 rounded shadow mb-3 cursor-pointer"
      onClick={() => openModal(task)}
    >
      <div className="flex justify-between">
        <h3 className="font-bold">
          {task.title}
        </h3>

        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>

      <p className="text-sm mt-2">
        {task.description}
      </p>

      <span className="inline-block mt-3 bg-gray-200 px-2 py-1 rounded text-xs">
        {task.priority}
      </span>
    </div>
  );
}

export default TaskCard;