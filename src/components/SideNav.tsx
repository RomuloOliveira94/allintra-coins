import { useWindowWidth } from "@react-hook/window-size";
import { Coins, Home, LogOut, Menu, Settings, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const onlyWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onlyWidth < 1024) {
      setIsMobile(true);
      setIsOpen(false);
    } else {
      setIsMobile(false);
      setIsOpen(true);
    }
  }, [onlyWidth]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isMobile === true
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div
      className={`shadow-md max-sm:fixed max-sm:h-full ${
        localStorage.getItem("theme") === "dracula"
          ? "border-r border-gray-700"
          : "border-gray-300"
      }`}
    >
      {isMobile && (
        <button
          className={
            isOpen
              ? "absolute top-0 left-0 z-10 xl:left-48"
              : "absolute top-0 left-0"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={38} className="" /> : <Menu size={40} />}
        </button>
      )}

      {isOpen && (
        <header
          ref={navRef}
          className="mt-4 items-center bg-base-100 p-6 sm:min-w-[15vw] relative h-full min-w-[50vw]"
        >
          <Link to={"/"}>
            <h1 className="text-xl font-bold text-center flex flex-col items-center gap-2 mb-4">
              Allintra Coins{" "}
              <span>
                <Coins size={32} className="text-yellow-600" />
              </span>
            </h1>
          </Link>
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
