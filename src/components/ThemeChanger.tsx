import { useContext, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [themeSwitcher, setThemeSwitcher] = useState(
    theme === "dracula" ? true : false
  );

  const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      localStorage.setItem("theme", "dracula");
      setThemeSwitcher(true);
      setTheme("dracula");
    }
    if (e.target.checked === false) {
      localStorage.setItem("theme", "light");
      setThemeSwitcher(false);
      setTheme("light");
    }
  };

  return (
    <div>
      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          className="toggle theme-controller"
          id="theme-controller"
          onChange={handleChangeTheme}
          checked={themeSwitcher}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default ThemeChanger;
