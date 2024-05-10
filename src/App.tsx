import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="container overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
