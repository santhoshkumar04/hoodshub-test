import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./components/Home";

function App() {
  return (
    <div className="px-2 md:px-4 lg:px-6">
      <Header />
      <main className="flex h-screen space-x-8">
        <Aside />
        <Home />
      </main>
    </div>
  );
}

export default App;
