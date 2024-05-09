import {
  BarChart4,
  ChevronLeft,
  ChevronRight,
  Coins,
  Home,
  LogOut,
} from "lucide-react";
import { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={isOpen ? "absolute top-0 left-48" : "absolute top-0 left-0"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={40} /> : <ChevronRight size={40} />}
      </button>

      {isOpen && (
        <header className="items-center bg-slate-500 p-3 xl:min-w-[20vw] relative h-full min-w-[50vw]">
          <h1 className="text-xl text-warning font-bold text-center my-6 flex flex-col items-center gap-2">
            Allintra Coins{" "}
            <span>
              <Coins size={32} className="text-warning" />
            </span>
          </h1>
          <nav>
            <ul className="flex flex-col  gap-2 w-full text-lg">
              <li>
                <a href="#" className="text-white flex gap-4 items-center">
                  <Home size={20} /> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white flex gap-4 items-center">
                  <BarChart4 size={20} /> Gráficos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white flex gap-4 items-center mt-10"
                >
                  <LogOut size={20} /> Sair
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </div>
  );
};

export default SideNav;
