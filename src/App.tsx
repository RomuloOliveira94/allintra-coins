import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="flex w-full min-h-screen">
      <SideNav />
      <main className="container overflow-x-auto"></main>
    </div>
  );
}

export default App;
