import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">
          Modern Kanban Board
        </h1>

        <Board />
      </div>
    </div>
  );
}

export default App;