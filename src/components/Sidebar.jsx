import {
  FaClipboardList,
  FaTasks,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 bg-white/10 backdrop-blur-xl border-r border-white/10 p-6">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          KANBAN
        </h2>
      </div>

      <nav className="space-y-4">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl flex items-center gap-3 shadow-lg">
          <FaClipboardList />
          <span className="font-semibold">
            Dashboard
          </span>
        </div>

        <div className="hover:bg-white/10 p-4 rounded-2xl flex items-center gap-3 transition">
          <FaTasks />
          <span>Tasks</span>
        </div>

        <div className="hover:bg-white/10 p-4 rounded-2xl flex items-center gap-3 transition">
          <FaChartPie />
          <span>Analytics</span>
        </div>

        <div className="hover:bg-white/10 p-4 rounded-2xl flex items-center gap-3 transition">
          <FaCog />
          <span>Settings</span>
        </div>
      </nav>

      <div className="mt-auto bg-gradient-to-r from-pink-500 to-purple-600 p-5 rounded-3xl shadow-2xl">
        <h3 className="font-bold text-xl">
          Productivity Boost
        </h3>

        <p className="text-sm mt-2 text-slate-100">
          Move tasks smoothly and manage projects
          effectively.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;