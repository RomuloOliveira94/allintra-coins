import { useState } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dracula" : "light";
    setTheme(newTheme);
    //save to local storage
    localStorage.setItem("theme", newTheme);
    window.location.reload();
  };

  return (
    <div>
      <button
        className="btn btn-secondary flex items-center gap-2"
        onClick={handleChangeTheme}
      >
        Mudar tema
        <span>{theme === "light" ? "🌞" : "🌚"}</span>
      </button>
    </div>
  );
};

export default ThemeChanger;
