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
      root.style.setProperty("--bg-primary", "0 0% 100%");
      root.style.setProperty("--bg-secondary", "210 40% 98%");
      root.style.setProperty("--text-primary", "222.2 84% 4.9%");
      root.style.setProperty("--text-secondary", "215.4 16.3% 46.9%");
      root.style.setProperty("--accent-primary", "221.2 83.2% 53.3%");
      root.style.setProperty("--accent-secondary", "262.1 83.3% 57.8%");
      root.style.setProperty("--border-color", "214.3 31.8% 91.4%");
      root.style.setProperty("--card-bg", "0 0% 100%");
      root.style.setProperty("--glass-bg", "0 0% 100% 0.1");
    } else {
      root.style.setProperty("--bg-primary", "222.2 84% 4.9%");
      root.style.setProperty("--bg-secondary", "217.2 32.6% 17.5%");
      root.style.setProperty("--text-primary", "210 40% 98%");
      root.style.setProperty("--text-secondary", "215 20.2% 65.1%");
      root.style.setProperty("--accent-primary", "217.2 91.2% 59.8%");
      root.style.setProperty("--accent-secondary", "262.1 83.3% 57.8%");
      root.style.setProperty("--border-color", "217.2 32.6% 17.5%");
      root.style.setProperty("--card-bg", "222.2 84% 4.9%");
      root.style.setProperty("--glass-bg", "0 0% 100% 0.05");
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    console.log(`Theme changed to: ${newTheme}`);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
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
              className="bg-theme-card/10 backdrop-blur-md border border-theme rounded-lg p-2 shadow-lg min-w-[160px]"
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
                      ? "bg-theme-card/20 text-theme-primary shadow-sm"
                      : "text-theme-secondary hover:text-theme-primary hover:bg-theme-card/10"
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
                      className="w-2 h-2 bg-theme-primary rounded-full"
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
        className="relative p-2 rounded-full bg-theme-card/10 backdrop-blur-sm border border-theme text-theme-primary hover:bg-theme-card/20 transition-all duration-200 group"
        title={getThemeLabel()}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {getThemeIcon()}
        </motion.div>
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-accent-secondary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </div>
  );
};

export default ThemeToggle; 