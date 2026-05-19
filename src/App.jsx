import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-8">
        Kanban Board
      </h1>

      <Board />
    </div>
  );
}

export default App;