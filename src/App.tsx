import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="flex w-full min-h-screen">
      <SideNav />
      <main className="container overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
