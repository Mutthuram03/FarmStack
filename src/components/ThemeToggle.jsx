import { Icon } from "./Icon";

export const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Icon name="moon" size={18} />
      ) : (
        <Icon name="sun" size={18} />
      )}
    </button>
  );
};
