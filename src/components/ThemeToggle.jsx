import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", margin: "1rem" }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          background: darkMode ? "#f5f5f5" : "#222",
          color: darkMode ? "#222" : "#f5f5f5",
          transition: "all 0.3s ease",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
