import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {

  const { addTask } = useContext(TaskContext);

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "Medium",
    tag: "",
    deadline: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title) return;

    addTask(task);

    setTask({
      title: "",
      description: "",
      status: "todo",
      priority: "Medium",
      tag: "",
      deadline: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-5 rounded-2xl shadow-xl mb-8"
    >

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Task title"
          className="p-3 rounded-lg bg-slate-700 outline-none"
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Tag"
          className="p-3 rounded-lg bg-slate-700 outline-none"
          value={task.tag}
          onChange={(e) =>
            setTask({ ...task, tag: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="p-3 rounded-lg bg-slate-700 outline-none md:col-span-2"
          rows="4"
          value={task.description}
          onChange={(e) =>
            setTask({
              ...task,
              description: e.target.value,
            })
          }
        />

        <select
          className="p-3 rounded-lg bg-slate-700"
          value={task.priority}
          onChange={(e) =>
            setTask({
              ...task,
              priority: e.target.value,
            })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          className="p-3 rounded-lg bg-slate-700"
          value={task.deadline}
          onChange={(e) =>
            setTask({
              ...task,
              deadline: e.target.value,
            })
          }
        />
      </div>

      <button className="mt-5 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;