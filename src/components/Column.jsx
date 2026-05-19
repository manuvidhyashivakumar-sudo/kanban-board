import TaskCard from "./TaskCard";

function Column({
  title,
  tasks,
  openModal,
}) {
  return (
    <div className="bg-gray-200 rounded p-4 min-h-[500px]">
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

export default Column;