import Hooks from "./pages/hooks";

function App() {
  return (
    <div className="flex s flex-col items-center bg-blue-200 border-blue-600-2 p-10 gap-4 h-screen">
      <h1 className="text-3xl font-bold  text-purple-800 text-center rounded-md p-4">
        All Hooks Page
      </h1>
      <Hooks />
    </div>
  );
}

export default App;