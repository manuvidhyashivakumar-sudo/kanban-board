import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

function Column({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-slate-800/60 backdrop-blur-lg rounded-3xl p-5 min-h-[500px] shadow-2xl border border-slate-700"
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          {column.title}
        </h2>

        <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;