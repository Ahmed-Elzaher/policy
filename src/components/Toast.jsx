import React from "react";
import { CheckIcon } from "./Icons.jsx";

/**
 * Accessible toast notification component
 */
export function Toast({ message }) {
  if (!message) return null;
  return (
    <aside className="toast-notice" role="status" aria-live="polite">
      <CheckIcon size={16} />
      <span>{message}</span>
    </aside>
  );
}
