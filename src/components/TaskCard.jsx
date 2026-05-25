import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

import {
  useDraggable,
} from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

import TaskModal from "./TaskModal";

function TaskCard({ task }) {
  const { deleteTask } =
    useContext(TaskContext);

  const [open, setOpen] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: task.id,
  });

  const style = {
    transform:
      CSS.Translate.toString(transform),
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onClick={() => setOpen(true)}
        className="bg-slate-700 hover:bg-slate-600 transition-all p-5 rounded-2xl cursor-grab shadow-lg hover:scale-105"
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">
            {task.title}
          </h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
            className="text-red-400"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-300 mt-2">
          {task.description}
        </p>

        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">
            {task.tag}
          </span>

          <span className="bg-pink-500 px-3 py-1 rounded-full text-sm">
            {task.priority}
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-3">
          Deadline: {task.deadline}
        </p>
      </div>

      {open && (
        <TaskModal
          task={task}
          close={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default TaskCard;