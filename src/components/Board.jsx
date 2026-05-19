import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core";

import {
  useContext,
  useState,
} from "react";

import { TaskContext } from "../context/TaskContext";

import Column from "./Column";
import AddTaskForm from "./AddTaskForm";
import TaskModal from "./TaskModal";

function Board() {
  const { tasks, setTasks } =
    useContext(TaskContext);

  const [selectedTask, setSelectedTask] =
    useState(null);

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

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  return (
    <>
      <AddTaskForm />

      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {columns.map((column) => (
            <div key={column.id} id={column.id}>
              <Column
                title={column.title}
                tasks={tasks.filter(
                  (task) =>
                    task.status === column.id
                )}
                openModal={setSelectedTask}
              />
            </div>
          ))}
        </div>
      </DndContext>

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          closeModal={() =>
            setSelectedTask(null)
          }
        />
      )}
    </>
  );
}

export default Board;