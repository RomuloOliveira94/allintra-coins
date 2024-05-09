import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="flex w-full">
      <SideNav />
      <main className="container">
        <h1>Main</h1>
      </main>
    </div>
  );
}

export default App;
