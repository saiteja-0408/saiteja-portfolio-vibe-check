import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, Palette } from "lucide-react";

type Theme = "light" | "dark" | "system";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove("light", "dark", "system");
    
    if (newTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      root.classList.add(newTheme);
      root.setAttribute("data-theme", newTheme);
    }
    
    // Update CSS custom properties for different themes
    if (newTheme === "light" || (newTheme === "system" && !window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.style.setProperty("--bg-primary", "#ffffff");
      root.style.setProperty("--bg-secondary", "#f8fafc");
      root.style.setProperty("--text-primary", "#1e293b");
      root.style.setProperty("--text-secondary", "#64748b");
      root.style.setProperty("--accent-primary", "#3b82f6");
      root.style.setProperty("--accent-secondary", "#8b5cf6");
      root.style.setProperty("--border-color", "#e2e8f0");
      root.style.setProperty("--card-bg", "#ffffff");
      root.style.setProperty("--glass-bg", "rgba(255, 255, 255, 0.1)");
    } else {
      root.style.setProperty("--bg-primary", "#0f172a");
      root.style.setProperty("--bg-secondary", "#1e293b");
      root.style.setProperty("--text-primary", "#f1f5f9");
      root.style.setProperty("--text-secondary", "#94a3b8");
      root.style.setProperty("--accent-primary", "#60a5fa");
      root.style.setProperty("--accent-secondary", "#a78bfa");
      root.style.setProperty("--border-color", "#334155");
      root.style.setProperty("--card-bg", "#1e293b");
      root.style.setProperty("--glass-bg", "rgba(255, 255, 255, 0.05)");
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "system":
        return <Monitor className="h-4 w-4" />;
      default:
        return <Palette className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light Mode";
      case "dark":
        return "Dark Mode";
      case "system":
        return "System Mode";
      default:
        return "Theme";
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="absolute right-0 top-12 z-50"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg min-w-[160px]"
            >
              {[
                { value: "light", label: "Light", icon: <Sun className="h-4 w-4" />, desc: "Clean & bright" },
                { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" />, desc: "Easy on eyes" },
                { value: "system", label: "System", icon: <Monitor className="h-4 w-4" />, desc: "Auto-detect" }
              ].map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleThemeChange(option.value as Theme)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-all duration-200 ${
                    theme === option.value
                      ? "bg-white/20 text-white shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex-shrink-0">{option.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs opacity-70">{option.desc}</div>
                  </div>
                  {theme === option.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 group"
        title={getThemeLabel()}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {getThemeIcon()}
        </motion.div>
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </div>
  );
};

export default ThemeToggle; 