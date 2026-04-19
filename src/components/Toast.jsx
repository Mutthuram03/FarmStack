import { useEffect } from "react";

export const Toast = ({ msg, onClose, duration = 3000 }) => {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div className="toast">
      <span className="toast-icon">✅</span>
      {msg}
    </div>
  );
};
