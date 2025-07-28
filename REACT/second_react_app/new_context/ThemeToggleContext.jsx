import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggleComp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh"
  };

  return (
    <div style={style}>
      <h3>Current Theme: {theme.toUpperCase()}</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default ThemeToggleComp;

