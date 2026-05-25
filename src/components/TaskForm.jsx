import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { addTask } =
    useContext(TaskContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "Medium",
    tag: "",
    deadline: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(form);

    setForm({
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
      className="bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-slate-700"
    >
      <div className="grid md:grid-cols-6 gap-4">
        <input
          type="text"
          placeholder="Task title"
          required
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="p-3 rounded-xl bg-slate-700"
        />

        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className="p-3 rounded-xl bg-slate-700"
        />

        <input
          type="text"
          placeholder="Tag"
          value={form.tag}
          onChange={(e) =>
            setForm({
              ...form,
              tag: e.target.value,
            })
          }
          className="p-3 rounded-xl bg-slate-700"
        />

        <input
          type="date"
          value={form.deadline}
          onChange={(e) =>
            setForm({
              ...form,
              deadline: e.target.value,
            })
          }
          className="p-3 rounded-xl bg-slate-700"
        />

        <select
          value={form.priority}
          onChange={(e) =>
            setForm({
              ...form,
              priority: e.target.value,
            })
          }
          className="p-3 rounded-xl bg-slate-700"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;