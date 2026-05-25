import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import Column from "./Column";
import TaskForm from "./TaskForm";

import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core";

const columns = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "progress",
    title: "In Progress",
  },
  {
    id: "done",
    title: "Done",
  },
];

function Board() {
  const { tasks, setTasks } =
    useContext(TaskContext);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    setTasks(
      tasks.map((task) =>
        task.id === active.id
          ? {
              ...task,
              status: over.id,
            }
          : task
      )
    );
  };

  return (
    <>
      <TaskForm />

      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter(
                (task) =>
                  task.status === column.id
              )}
            />
          ))}
        </div>
      </DndContext>
    </>
  );
}

export default Board;