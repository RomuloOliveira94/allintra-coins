import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (!theme) {
      localStorage.setItem("theme", "light");
    }
    setTheme(localStorage.getItem("theme"));
  }, [theme, setTheme]);

  return (
    <div data-theme={theme} className="flex min-h-screen">
      <SideNav />
      <main className="container overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
