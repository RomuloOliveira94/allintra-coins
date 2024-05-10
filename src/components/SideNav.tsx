import { ChevronRight, Coins, Home, LogOut, Settings, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
      setIsOpen(false);
    }
  }, []);

  return (
    <div className="shadow-md">
      {isMobile && (
        <button
          className={
            isOpen
              ? "absolute top-0 left-40 z-10 xl:left-48"
              : "absolute top-0 left-0"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} className="" /> : <ChevronRight size={40} />}
        </button>
      )}

      {isOpen && (
        <header className="items-center bg-base-100 p-6 sm:min-w-[15vw] relative h-full min-w-[50vw]">
          <h1 className="text-xl font-bold text-center flex flex-col items-center gap-2 mb-4">
            Allintra Coins{" "}
            <span>
              <Coins size={32} className="text-yellow-600" />
            </span>
          </h1>
          <nav>
            <ul
              className="flex flex-col  gap-2 w-full text-lg"
              onClick={() => {
                isMobile && setIsOpen(false);
              }}
            >
              <li>
                <Link to={"/"} className="flex gap-4 items-center">
                  <Home size={20} /> Home
                </Link>
              </li>
              <li>
                <Link to={"/config"} className="flex gap-4 items-center">
                  <Settings size={20} /> Configurar
                </Link>
              </li>
              <li>
                <a href="#" className="flex gap-4 items-center mt-10">
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
