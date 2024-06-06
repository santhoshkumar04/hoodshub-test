import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="">
      <Header />
      <main className="flex h-[91vh]">
        <Aside />
        <div>main</div>
      </main>
    </div>
  );
}

export default App;
